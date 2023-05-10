import React, { useMemo, lazy, Suspense } from 'react';
import {
  BrowserRouter, Navigate, Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from './theme';

import { RootState } from './store/store';

const LoginPage = lazy(() => import('./screens/login'));
const HomePage = lazy(() => import('./screens/home'));
const ProfilePage = lazy(() => import('./screens/profile'));

const App = () => {
  const mode = useSelector((state: RootState) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state: RootState) => state.token));

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route
              path='/home'
              element={isAuth ? <HomePage /> : <Navigate to='/' />}
            />
            <Route
              path='/profile/:userId'
              element={isAuth ? <ProfilePage /> : <Navigate to='/' />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
