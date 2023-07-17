import React from 'react';
import {LoginForm} from "../../modules/login-form";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/use-app-selector";
import {setAccessToken, setRefreshToken} from "../../utils/token-storage";
import {ILoginUserParams} from "../../api/auth-api/auth-api";
import {loginUserThunk} from "../../services/thunks/loginUserThunk";

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { validationErrors, error } = useAppSelector(state => state.loginForm)

  const submitLogin = (loginData: ILoginUserParams) => {
    dispatch(loginUserThunk(loginData))
      .unwrap()
      .then(loginUserData => {
        const { accessToken, refreshToken, ...user  } = loginUserData;
        setRefreshToken(refreshToken);
        setAccessToken(accessToken);

        navigate('/')
      })
      .catch(() => {})
  }

  return (
    <main>
      <LoginForm onSubmit={submitLogin} validationError={validationErrors} loginError={error}/>
    </main>
  );
};

export default LoginPage;
