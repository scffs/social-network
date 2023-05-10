import { useState, useEffect } from 'react';
import { User } from '../../slice/interfaces';

export const useUser = (userId?: string, token?: string | null) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: User = await response.json();
    if (data) setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return user;
};
