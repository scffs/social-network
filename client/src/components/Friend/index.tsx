import React, { FC } from 'react';
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import {
  Box, IconButton, Typography, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setFriends } from '../../slice';

import FlexBetween from '../FlexBetween';
import UserImage from '../UserImage/UserImage';

import { Theme } from '../../theme';

import { FriendProps } from './interfaces';

import { RootState } from '../../store/store';

const Friend:FC<FriendProps> = ({
  friendId, name, subtitle, userPicturePath,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const friends = useSelector((state: RootState) => state.user?.friends);

  const { palette }: Theme = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const { main } = palette.neutral;
  const { medium } = palette.neutral;

  const isFriend = friends?.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap='1rem'>
        <UserImage image={userPicturePath} size='55px' />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant='h5'
            fontWeight='500'
            sx={{
              '&:hover': {
                color: primaryDark,
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize='0.75rem'>
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryDark, p: '0.5rem' }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryLight }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryLight }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
