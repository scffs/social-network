import React, { FC, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { setFriends } from '../../../slice';

import WidgetWrapper from '../../../components/WidgetWrapper';
import Friend from '../../../components/friend/Friend';

import { FriendListWidgetProps } from './interfaces';

import { Theme } from '../../../theme';

import { RootState } from '../../../store/store';

const FriendListWidget:FC<FriendListWidgetProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette }: Theme = useTheme();
  const token = useSelector((state: RootState) => state.token);
  const friends = useSelector((state: RootState) => state.user?.friends);
  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
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
        {friends.length !== 0 && friends.map((friend) => (
          <Friend
            key={friend._id}
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
