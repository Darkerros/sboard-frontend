import React, { FC, FormEvent, useCallback, useState } from 'react';
import { styled } from "styled-components";
import FormTitle from "components/form-title/form-title";
import EmailInput from "components/email-input/email-input";
import PasswordInput from "components/password-input/password-input";
import Button from "ui/button/button";

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
`

const InputsFieldSet = styled.fieldset`
  border: none;
  padding: 0;
  
  gap: 5px;
  display: flex;
  flex-direction: column;
`

const ErrorMessageComponent = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  
  margin: 0 auto;
  max-width: 200px;
`

interface OnSubmitLoginFormParams {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: ({ email, password }:OnSubmitLoginFormParams) => void;
  error?: string | null;
}

const LoginForm:FC<LoginFormProps> = ({ onSubmit, error}) => {
  const [email, setEmail] = useState<string>('')
  const handleEmailChange = useCallback((value: string) => setEmail(value), [])

  const [password, setPassword] = useState<string>('')
  const handlePasswordChange = useCallback((value: string) => setPassword(value), [])

  const handleSubmit = (evt:FormEvent) => {
    evt.preventDefault()
    onSubmit({
      email,
      password,
    })
  }

  return (
    <LoginFormComponent noValidate onSubmit={handleSubmit}>
      <FormTitle>Авторизация</FormTitle>
      <InputsFieldSet>
        <EmailInput onChange={handleEmailChange} value={email}/>
        <PasswordInput onChange={handlePasswordChange} value={password}/>
      </InputsFieldSet>
      {error && <ErrorMessageComponent>{error}</ErrorMessageComponent>}
      <Button className="register-form__submitButton" type='submit'>Войти</Button>
    </LoginFormComponent>
  );
};

export default LoginForm;
