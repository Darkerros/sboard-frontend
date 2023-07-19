import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { userActions } from '../../services/reducers/user-reducer';
import { setAccessToken, setRefreshToken } from '../../utils/token-storage';
import { registrateUserThunk } from '../../services/thunks/registrate-user-thunk';

import { RegisterForm } from '../../forms/register-form';
import { IRegisterUserParams } from '../../api/auth-api/auth-api';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { validationErrors, error } = useAppSelector(state => state.registerForm);

  const submitRegister = (registerData: IRegisterUserParams) => {
    dispatch(registrateUserThunk(registerData))
      .unwrap()
      .then(registerUserData => {
        const { accessToken, refreshToken, ...user } = registerUserData;
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
      <RegisterForm onSubmit={submitRegister} validationError={validationErrors} registerError={error} />
    </main>
  );
};

export default RegisterPage;
