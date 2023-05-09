export interface User {
  _id: string;
  name: string;
  email: string;
  friends: User[];
}

export interface Post {
  id: string;
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
