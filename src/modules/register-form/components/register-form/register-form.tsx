import React, {FC, FormEvent, useCallback, useEffect, useState} from 'react';
import {css, styled} from "styled-components";
import FormTitle from "components/form-title/form-title";
import NicknameInput from "components/nickname-input/nickname-input";
import EmailInput from "components/email-input/email-input";
import PasswordInput from "components/password-input/password-input";
import Button from "ui/button/button";

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

interface OnSubmitRegisterFormParams {
  nickname: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  onSubmit: ({ nickname, email, password }:OnSubmitRegisterFormParams) => void;
  error?: string | null;
}

const RegisterForm:FC<RegisterFormProps> = ({ onSubmit, error}) => {
  const [nickname, setNickname] = useState<string>('')
  const handleNicknameChange = useCallback((value: string) => setNickname(value), [])

  const [email, setEmail] = useState<string>('')
  const handleEmailChange = useCallback((value: string) => setEmail(value), [])

  const [password, setPassword] = useState<string>('')
  const handlePasswordChange = useCallback((value: string) => setPassword(value), [])

  const handleSubmit = (evt:FormEvent) => {
    evt.preventDefault()
    onSubmit({
      nickname,
      email,
      password,
    })
  }

  return (
    <RegisterFormComponent noValidate onSubmit={handleSubmit}>
      <FormTitle>Регистрация</FormTitle>
      <InputsFieldSet>
        <NicknameInput onChange={handleNicknameChange} value={nickname}/>
        <EmailInput onChange={handleEmailChange} value={email}/>
        <PasswordInput onChange={handlePasswordChange} value={password}/>
      </InputsFieldSet>
      {error && <ErrorMessageComponent>{error}</ErrorMessageComponent>}
      <Button className="register-form__submitButton" type='submit'>Зарегистрироваться</Button>
    </RegisterFormComponent>
  );
};

export default RegisterForm;
