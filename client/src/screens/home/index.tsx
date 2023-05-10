import React, { lazy, Suspense } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

const Header = lazy(() => import('../../components/Header'));
const UserWidget = lazy(() => import('../../components/UserWidget'));
const MyPostWidget = lazy(() => import('../../components/CreatePost'));
const PostsWidget = lazy(() => import('../../components/PostsWidget'));
const FriendListWidget = lazy(() => import('../../components/FriendListWidget'));

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  // @ts-ignore
  const { _id, picturePath } = useSelector((state: RootState) => state.user);

  return (
    <Box>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Header />
        <Box
          width='100%'
          padding='2rem 6%'
          display={isNonMobileScreens ? 'flex' : 'block'}
          gap='0.5rem'
          justifyContent='space-between'
        >
          <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
            <UserWidget userId={_id} picturePath={picturePath} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? '42%' : undefined}
            mt={isNonMobileScreens ? undefined : '2rem'}
          >
            <MyPostWidget picturePath={picturePath} />
            <PostsWidget />
          </Box>
          {isNonMobileScreens && (
            <Box flexBasis='26%'>
              <FriendListWidget userId={_id} />
            </Box>
          )}
        </Box>
      </Suspense>
    </Box>
  );
};

export default HomePage;
