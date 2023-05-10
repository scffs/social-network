import React, { FC } from 'react';
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import {
  IconButton, Typography, useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setFriends } from '../../slice';

import FlexBetween from '../FlexBetween';
import UserImage from '../UserImage/UserImage';

import { Theme } from '../../theme';

import { FriendProps } from './interfaces';

import { RootState } from '../../store/store';

const Friend:FC<FriendProps> = ({
  friendId, name, subtitle, userPicturePath, userId,
}) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { _id } = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const friends = useSelector((state: RootState) => state.user?.friends);
  const { palette }: Theme = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const { main } = palette.neutral;
  const { medium } = palette.neutral;

  const isFriend = friends?.length && friends?.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `https://social-network-production-ca2f.up.railway.app/users/${_id}/${friendId}`,
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
        <Link
          to={`/social-network/profile/${friendId}`}
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
        </Link>
      </FlexBetween>
      {userId !== friendId && (
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
      )}
    </FlexBetween>
  );
};

export default Friend;
