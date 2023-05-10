import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPosts } from '../../slice';

import PostWidget from '../PostWidget';

import { PostWidgetProps } from './interfaces';

import { RootState } from '../../store/store';

const PostsWidget:FC<PostWidgetProps> = ({ userPostsId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  const token = useSelector((state: RootState) => state.token);

  const getPosts = async () => {
    const response = await fetch('https://scffs.github.io/social-network/posts', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };
  const getUserPosts = async () => {
    const response = await fetch(
      `https://scffs.github.io/social-network/posts/${userPostsId}/posts`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {posts.map(({
        _id,
        firstName,
        lastName,
        description,
        location,
        picturePath,
        userPicturePath,
        likes,
        userId,
      }) => (
        <PostWidget
          key={_id}
          postId={_id}
          postUserId={userId}
          name={`${firstName} ${lastName}`}
          description={description}
          location={location}
          picturePath={picturePath}
          userPicturePath={userPicturePath}
          likes={likes}
        />
      ))}
    </>
  );
};

export default PostsWidget;
