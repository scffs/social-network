import {FC, useEffect, useState} from 'react';
import {
  LocationOnOutlined, Person,
  WorkOutlineOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography, Divider, useTheme } from '@mui/material';

import UserImage from '../../../components/UserImage.tsx';
import FlexBetween from '../../../components/FlexBetween.ts';
import WidgetWrapper from '../../../components/WidgetWrapper.ts';

import { UserWidgetProps } from './interfaces.ts';
import { Theme } from '../../../theme.ts';

const UserWidget:FC<UserWidgetProps> = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette }: Theme = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        onClick={() => navigate(`/profile/${userId}`)}
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
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
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
