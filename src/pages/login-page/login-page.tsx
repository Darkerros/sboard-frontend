import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ILoginUserParams } from '../../api/auth-api/auth-api';

import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { userActions } from '../../services/reducers/user-reducer';
import { loginUserThunk } from '../../services/thunks/login-user-thunk';
import { setAccessToken, setRefreshToken } from '../../utils/token-storage';

import { LoginForm } from '../../forms/login-form';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { validationErrors, error } = useAppSelector(state => state.loginForm);

  const submitLogin = (loginData: ILoginUserParams) => {
    dispatch(loginUserThunk(loginData))
      .unwrap()
      .then(loginUserData => {
        const { accessToken, refreshToken, ...user } = loginUserData;
        setRefreshToken(refreshToken);
        setAccessToken(accessToken);
        dispatch(userActions.setUser(user));
        navigate('/');
      })
      .catch(() => {
      });
  };

  return (
    <main>
      <LoginForm onSubmit={submitLogin} validationError={validationErrors} loginError={error} />
    </main>
  );
};

export default LoginPage;
