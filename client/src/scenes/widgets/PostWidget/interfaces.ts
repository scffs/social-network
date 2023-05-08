import { AuthState, Post } from '../../../slice/interfaces';

export interface PostWidgetProps {
  postId: string;
  postUserId: string;
  name: string;
  description: string;
  location: string;
  picturePath: string;
  userPicturePath: string;
  likes: { [key: string]: boolean };
}

export interface RootState {
  auth: AuthState;
  posts: Post[];
}
