import React, { FC, FormEvent, useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { ILoginUserParams } from '../../../../api/auth-api/auth-api';

import Button from '../../../../ui/button/button';
import FormTitle from '../../../../components/form-title/form-title';
import EmailInput from '../../../../controls/email-input/email-input';
import PasswordInput from '../../../../controls/password-input/password-input';

const LoginFormComponent = styled.form`
  min-width: 260px;
  background: white;
  border-radius: 5px;

  box-sizing: border-box;
  padding: 25px 40px;

  gap: 10px;
  display: flex;
  flex-direction: column;

  .register-form__submitButton {
    margin: 0 auto;
  }
`;

const InputsFieldSet = styled.fieldset`
  border: none;
  padding: 0;

  gap: 5px;
  display: flex;
  flex-direction: column;
`;

const ErrorMessageComponent = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;

  margin: 0 auto;
  max-width: 200px;
`;

interface LoginFormProps {
  /*
   * Ошибка при отправки формы
   */
  loginError?: string | null;
  /*
   * Ошибки валидации формы
   */
  validationError: Record<string, string>;
  /*
   * Колбек срабатывающий при подтверждении отправки формы
   */
  onSubmit: ({ email, password }: ILoginUserParams) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit, loginError, validationError }) => {
  const [email, setEmail] = useState<string>('');
  const handleEmailChange = useCallback((value: string) => setEmail(value), []);

  const [password, setPassword] = useState<string>('');
  const handlePasswordChange = useCallback((value: string) => setPassword(value), []);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit({
      email,
      password,
    });
  };

  return (
    <LoginFormComponent noValidate onSubmit={handleSubmit}>
      <FormTitle>Авторизация</FormTitle>
      <InputsFieldSet>
        <EmailInput onChange={handleEmailChange} value={email} />
        {validationError['email'] && <ErrorMessageComponent>{validationError['email']}</ErrorMessageComponent>}
        <PasswordInput onChange={handlePasswordChange} value={password} />
        {validationError['password'] && <ErrorMessageComponent>{validationError['password']}</ErrorMessageComponent>}
      </InputsFieldSet>
      {loginError && <ErrorMessageComponent>{loginError}</ErrorMessageComponent>}
      <Button className='register-form__submitButton' type='submit'>Войти</Button>
    </LoginFormComponent>
  );
};

export default LoginForm;
