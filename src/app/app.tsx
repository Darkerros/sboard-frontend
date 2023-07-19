import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from '../hooks/use-app-dispatch';
import { checkAuthThunk } from '../services/thunks/check-auth-thunk';

import Modals from '../modules/modals/modals';
import LoginPage from '../pages/login-page/login-page';
import RegisterPage from '../pages/register-page/register-page';
import ProtectedRoute from '../routes/protected-route/protected-route';
import PostControllPage from '../pages/post-controll-page/post-controll-page';

const AppContent = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: aliceblue;
`;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <AppContent>
      <Routes>
        <Route path={'/login'} element={
          <ProtectedRoute needAuth={false} redirectUrl={'/'}>
            <LoginPage />
          </ProtectedRoute>
        } />
        <Route path={'/register'} element={
          <ProtectedRoute needAuth={false} redirectUrl={'/'}>
            <RegisterPage />
          </ProtectedRoute>
        } />
        <Route path={'/'} element={
          <ProtectedRoute needAuth={true} redirectUrl={'/login'}>
            <PostControllPage />
          </ProtectedRoute>
        } />
      </Routes>
      <Modals />
    </AppContent>
  );
}

export default App;
