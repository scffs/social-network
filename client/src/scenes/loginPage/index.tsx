import React from 'react';
import {
  Box, Typography, useTheme, useMediaQuery,
} from '@mui/material';

import Form from './Form.js';

import { Theme } from '../../theme';

const LoginPage = () => {
  const { palette }: Theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <Box>
      <Box
        component='div'
        width='100%'
        bgcolor={palette.background.alt}
        p='1rem 6%'
        textAlign='center'
      >
        <Typography fontWeight='bold' fontSize='32px' color='primary'>
          VK Mini
        </Typography>
      </Box>

      <Box
        component='div'
        width={isNonMobileScreens ? '50%' : '93%'}
        p='2rem'
        m='2rem auto'
        borderRadius='1.5rem'
        bgcolor={palette.background.alt}
      >
        <Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
          Welcome to VK Mini!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
