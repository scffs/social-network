import React, { FC, useState } from 'react';
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from '@mui/icons-material';
import { IconButton, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import FlexBetween from '../../../components/FlexBetween';
import Friend from '../../../components/friend/Friend';
import WidgetWrapper from '../../../components/WidgetWrapper';

import { setPost } from '../../../slice';

import { PostWidgetProps } from './interfaces';

import { Theme } from '../../../theme';

const PostWidget:FC<PostWidgetProps> = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const [localLikes, setLocalLikes] = useState(likes);
  const isLiked = Boolean(localLikes[loggedInUserId]);
  const likeCount = Object.keys(localLikes).length;

  const { palette }: Theme = useTheme();
  const { main } = palette.neutral;
  const primary = palette.primary.main;

  console.log(postUserId, 'автор', 'текст', description);
  const handleLikeClick = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ postId, post: updatedPost }));
    setLocalLikes(updatedPost.likes);
  };

  return (
    <WidgetWrapper m='2rem 0'>
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: '1rem' }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width='100%'
          height='auto'
          alt='post'
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt='0.25rem'>
        <FlexBetween gap='1rem'>
          <FlexBetween gap='0.3rem'>
            <IconButton onClick={handleLikeClick}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default PostWidget;
