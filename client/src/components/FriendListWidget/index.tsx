import React, { FC, lazy, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { setFriends } from '../../slice';

import WidgetWrapper from '../WidgetWrapper';

import { FriendListWidgetProps } from './interfaces';

import { Theme } from '../../theme';

import { RootState } from '../../store/store';

const Friend = lazy(() => import('../Friend'));

const FriendListWidget:FC<FriendListWidgetProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette }: Theme = useTheme();
  const token = useSelector((state: RootState) => state.token);
  // @ts-ignore
  const { _id } = useSelector((state: RootState) => state.user);
  const friends = useSelector((state: RootState) => state.user?.friends);
  const getFriends = async () => {
    const response = await fetch(
      `https://scffs.github.io/social-network/users/${userId}/friends`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant='h5'
        fontWeight='500'
        sx={{ mb: '1.5rem' }}
      >
        Друзья
      </Typography>
      <Box display='flex' flexDirection='column' gap='1.5rem'>
        {friends?.length !== 0 && friends?.map((friend) => (
          <Friend
            key={friend._id}
            userId={_id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
