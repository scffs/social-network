import { Box } from '@mui/material';
import {FC} from 'react';

interface UserWidgetProps {
  image: string;
  size?: string;
}

const UserImage:FC<UserWidgetProps> = ({ image, size = '60px' }) => {
  return (
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
};

export default UserImage;
