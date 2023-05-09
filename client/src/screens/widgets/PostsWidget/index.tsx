import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPosts } from '../../../slice';

import PostWidget from '../PostWidget';

import { Post, PostWidgetProps } from './interfaces';

const PostsWidget:FC<PostWidgetProps> = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3001/posts', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(posts);
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
      }: Post, index: number) => (
        <PostWidget
          key={index}
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