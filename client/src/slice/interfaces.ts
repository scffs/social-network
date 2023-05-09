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
  likes: [];
}

export interface AuthState {
  mode: 'light' | 'dark';
  user: User | null;
  token: string | null;
  posts: Post[];
}
