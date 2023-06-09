import React, { FC, useState } from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
} from '@mui/icons-material';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
} from '@mui/material';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';

import { setPosts } from '../../slice';

import { CreatePostProps } from './interfaces';

import { Theme } from '../../theme';

import { RootState } from '../../store/store';

import FlexBetween from '../FlexBetween';
import WidgetWrapper from '../WidgetWrapper';
import UserImage from '../UserImage/UserImage';

const CreatePost:FC<CreatePostProps> = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [post, setPost] = useState('');
  const { palette }: Theme = useTheme();
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const userId = user?._id;
  const { mediumMain, medium } = palette.neutral;

  const handlePost = async () => {
    const formData = new FormData();
    if (userId) formData.append('userId', userId);
    formData.append('description', post);
    if (image) {
      formData.append('picture', image);
      formData.append('picturePath', image.name);
    }

    const response = await fetch('https://social-network-production-ca2f.up.railway.app/posts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost('');
  };

  return (
    <WidgetWrapper>
      <FlexBetween gap='1.5rem'>
        <UserImage image={picturePath} />
        <InputBase
          placeholder='Пишите о чём угодно'
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: '100%',
            backgroundColor: palette.neutral.light,
            borderRadius: '2rem',
            padding: '1rem 2rem',
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius='5px'
          mt='1rem'
          p='1rem'
        >
          <Dropzone
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p='1rem'
                  width='100%'
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Загрузить изображение</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: '15%' }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />

      <FlexBetween>
        <FlexBetween gap='0.25rem' onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ '&:hover': { cursor: 'pointer', color: medium } }}
          >
            Изображение
          </Typography>
        </FlexBetween>

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.default,
            backgroundColor: palette.primary.dark,
            borderRadius: '3rem',
          }}
        >
          Опубликовать
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default CreatePost;
