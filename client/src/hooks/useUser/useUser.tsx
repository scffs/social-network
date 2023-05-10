import { useState, useEffect } from 'react';
import { User } from '../../slice/interfaces';

export const useUser = (userId?: string, token?: string | null) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const response = await fetch(`https://social-network-production-ca2f.up.railway.app/users/${userId}`, {
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
