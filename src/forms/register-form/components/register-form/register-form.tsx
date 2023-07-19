import React, { FC, FormEvent, useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { IRegisterUserParams } from '../../../../api/auth-api/auth-api';

import Button from '../../../../ui/button/button';
import FormTitle from '../../../../components/form-title/form-title';
import NicknameInput from '../../../../controls/nickname-input/nickname-input';
import EmailInput from '../../../../controls/email-input/email-input';
import PasswordInput from '../../../../controls/password-input/password-input';

const RegisterFormComponent = styled.form`
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

interface RegisterFormProps {
  /*
   * Ошибка при отправки формы
   */
  registerError?: string | null;
  /*
   * Ошибки валидации формы
   */
  validationError: Record<string, string>;
  /*
   * Колбек срабатывающий при подтверждении отправки формы
   */
  onSubmit: ({ nickname, email, password }: IRegisterUserParams) => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit, validationError, registerError }) => {
  const [nickname, setNickname] = useState<string>('');
  const handleNicknameChange = useCallback((value: string) => setNickname(value), []);

  const [email, setEmail] = useState<string>('');
  const handleEmailChange = useCallback((value: string) => setEmail(value), []);

  const [password, setPassword] = useState<string>('');
  const handlePasswordChange = useCallback((value: string) => setPassword(value), []);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit({
      nickname,
      email,
      password,
    });
  };

  return (
    <RegisterFormComponent noValidate onSubmit={handleSubmit}>
      <FormTitle>Регистрация</FormTitle>
      <InputsFieldSet>
        <NicknameInput onChange={handleNicknameChange} value={nickname} />
        {validationError['nickname'] && <ErrorMessageComponent>{validationError['nickname']}</ErrorMessageComponent>}
        <EmailInput onChange={handleEmailChange} value={email} />
        {validationError['email'] && <ErrorMessageComponent>{validationError['email']}</ErrorMessageComponent>}
        <PasswordInput onChange={handlePasswordChange} value={password} />
        {validationError['password'] && <ErrorMessageComponent>{validationError['password']}</ErrorMessageComponent>}
      </InputsFieldSet>
      {registerError && <ErrorMessageComponent>{registerError}</ErrorMessageComponent>}
      <Button className='register-form__submitButton' type='submit'>Зарегистрироваться</Button>
    </RegisterFormComponent>
  );
};

export default RegisterForm;
