export interface Post {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  description: string;
  location: string;
  picturePath: string;
  userPicturePath: string;
  likes: { [key: string]: boolean };
}

export interface PostWidgetProps {
  userId: string;
  isProfile?: boolean;
}
