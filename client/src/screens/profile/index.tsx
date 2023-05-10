import React, { lazy, Suspense } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useUser } from '../../hooks/useUser/useUser';

import { RootState } from '../../store/store';

const CreatePost = lazy(() => import('../../components/CreatePost'));
const PostsWidget = lazy(() => import('../../components/PostsWidget'));
const FriendListWidget = lazy(() => import('../../components/FriendListWidget'));
const UserWidget = lazy(() => import('../../components/UserWidget'));
const Header = lazy(() => import('../../components/Header'));

const ProfilePage = () => {
  const { userId } = useParams();
  const token = useSelector((state: RootState) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const user = useUser(userId, token);

  if (!user) return null;

  return (
    <Box>
      <Suspense fallback={<div>Загрузка...</div>}>
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
            <CreatePost picturePath={user.picturePath} />
            <Box m='2rem 0' />
            <PostsWidget userPostsId={userId} isProfile />
          </Box>
        </Box>
      </Suspense>
    </Box>
  );
};

export default ProfilePage;
