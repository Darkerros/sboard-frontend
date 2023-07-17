import {RegisterForm} from "../../modules/register-form";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {registrateUserThunk} from "../../services/thunks/registrate-user-thunk";
import {useAppSelector} from "../../hooks/use-app-selector";
import {setAccessToken, setRefreshToken} from "../../utils/token-storage";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../services/reducers/user-reducer";

const RegisterPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { validationErrors, error } = useAppSelector(state => state.registerForm)

  const submitRegister = (registerData: { email: string, password: string, nickname: string }) => {
    dispatch(registrateUserThunk(registerData))
      .unwrap()
      .then(registerUserData => {
        const { accessToken, refreshToken, ...user  } = registerUserData;
        setRefreshToken(refreshToken);
        setAccessToken(accessToken);
        dispatch(userActions.setUser(user))
        navigate('/')
      })
      .catch(() => {})
  }

  return (
    <main>
      <RegisterForm onSubmit={submitRegister} validationError={validationErrors} registerError={error}/>
    </main>
  );
};

export default RegisterPage;
