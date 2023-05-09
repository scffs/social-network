import React, { useMemo } from 'react';
import {
  BrowserRouter, Navigate, Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from './theme';

import LoginPage from './screens/login';
import HomePage from './screens/home';
import ProfilePage from './screens/profile';

import { RootState } from './store/store';

const App = () => {
  const mode = useSelector((state: RootState) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state: RootState) => state.token));

  return (
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
  );
};

export default App;
