import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import UserWidget from '../../components/UserWidget';
import FriendListWidget from '../../components/FriendListWidget';
import MyPostWidget from '../../components/CreatePost';
import PostsWidget from '../../components/PostsWidget';

import { useUser } from '../../hooks/useUser/useUser';

import { RootState } from '../../store/store';

const ProfilePage = () => {
  const { userId } = useParams();
  const token = useSelector((state: RootState) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const user = useUser(userId, token);

  if (!user) return null;

  return (
    <Box>
      <Header />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap='2rem'
        justifyContent='center'
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m='2rem 0' />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m='2rem 0' />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
