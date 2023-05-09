import React, { FC } from 'react';
import { Box } from '@mui/material';

import { UserImageProps } from './interfaces';

const UserImage:FC<UserImageProps> = ({ image, size = '60px' }) => (
  <Box width={size} height={size}>
    <img
      style={{ objectFit: 'cover', borderRadius: '50%' }}
      width={size}
      height={size}
      alt='user'
      src={`http://localhost:3001/assets/${image}`}
    />
  </Box>
);

export default UserImage;
