import React, { FC } from 'react';
import {
  LocationOnOutlined, Person,
  WorkOutlineOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Box, Typography, Divider, useTheme,
} from '@mui/material';

import UserImage from '../UserImage/UserImage';
import FlexBetween from '../FlexBetween';
import WidgetWrapper from '../WidgetWrapper';

import { UserWidgetProps } from './interfaces';

import { Theme } from '../../theme';

import { RootState } from '../../store/store';

import { useUser } from '../../hooks/useUser/useUser';

const UserWidget:FC<UserWidgetProps> = ({ userId, picturePath }) => {
  const user = useUser(userId, useSelector((state: RootState) => state.token));
  const { palette }: Theme = useTheme();
  const navigate = useNavigate();
  const { dark, medium, main } = palette.neutral;

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    friends,
    age,
  } = user;

  return (
    <WidgetWrapper>
      <FlexBetween
        gap='0.5rem'
        pb='1.1rem'
        onClick={() => navigate(`/social-network/profile/${userId}`)}
      >
        <FlexBetween gap='1rem'>
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant='h4'
              color={dark}
              fontWeight='500'
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  cursor: 'pointer',
                },
              }}
            >
              {firstName}
              {' '}
              {lastName}
            </Typography>
            <Typography color={medium}>
              {friends?.length}
              {' '}
              friends
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>
      <Divider />
      <Box p='1rem 0'>
        <Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'>
          <LocationOnOutlined fontSize='large' sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display='flex' alignItems='center' gap='1rem'>
          <WorkOutlineOutlined fontSize='large' sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
        <Box display='flex' alignItems='center' gap='1rem'>
          <Person fontSize='large' sx={{ color: main }} />
          <Typography color={medium}>{age}</Typography>
        </Box>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
