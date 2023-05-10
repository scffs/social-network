import React, { FC, useState } from 'react';
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
} from '@mui/icons-material';
import { IconButton, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import FlexBetween from '../FlexBetween';
import Friend from '../Friend';
import WidgetWrapper from '../WidgetWrapper';

import { setPost } from '../../slice';

import { Post } from '../../slice/interfaces';
import { PostWidgetProps } from './interfaces';

import { Theme } from '../../theme';

import { RootState } from '../../store/store';

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
  const token = useSelector((state: RootState) => state.token);
  const loggedInUserId = useSelector((state: RootState) => state.user?._id);
  const [localLikes, setLocalLikes] = useState(likes);
  // @ts-ignore
  const isLiked = Boolean(localLikes[loggedInUserId]);
  const likeCount = Object.keys(localLikes).length;
  // @ts-ignore
  const { _id } = useSelector((state: RootState) => state.user);
  const { palette }: Theme = useTheme();
  const { main } = palette.neutral;
  const primary = palette.primary.main;

  const handleLikeClick = async () => {
    const response = await fetch(`social-network-production-ca2f.up.railway.app/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost: Post = await response.json();
    dispatch(setPost({ postId, post: updatedPost }));
    setLocalLikes(updatedPost.likes);
  };

  return (
    <WidgetWrapper m='2rem 0'>
      <Friend
        userId={_id}
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
          src={`social-network-production-ca2f.up.railway.app/assets/${picturePath}`}
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
