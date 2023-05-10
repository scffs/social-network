export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  occupation: string;
  picturePath: string;
  userPicturePath: string;
  location: string;
  age: number;
  email: string;
  friends: User[];
}

export interface Post {
  _id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  userPicturePath: string;
  userId: string;
  location: string;
  description: string;
  image: string;
  likes: { [key: string]: boolean };
}

export interface AuthState {
  mode: 'light' | 'dark';
  user: User | null;
  token: string | null;
  posts: Post[];
}
