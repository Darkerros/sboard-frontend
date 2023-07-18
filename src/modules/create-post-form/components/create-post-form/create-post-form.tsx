import React, { FC, FormEvent, useCallback, useState } from 'react';
import { styled } from "styled-components";
import FormTitle from "../../../../components/form-title/form-title";
import Button from "../../../../ui/button/button";
import {ICreatePostParams} from "../../../../api/post-api/post-api";
import TitleInput from "../../../../components/title-input/title-input";
import DescriptionInput from "../../../../components/description-input/description-input";

const CreatePostFormComponent = styled.form`
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

interface CreatePostFormProps {
  onSubmit: ({ title, description }: ICreatePostParams) => void;
  createPostError: string | null;
  validationError: Record<string, string>;
}

const CreatePostForm:FC<CreatePostFormProps> = ({ onSubmit, createPostError, validationError}) => {
  const [title, setTitle] = useState<string>('')
  const handleEmailChange = useCallback((value: string) => setTitle(value), [])

  const [description, setDescription] = useState<string>('')
  const handleDescriptionChange = useCallback((value: string) => setDescription(value), [])

  const handleSubmit = (evt:FormEvent) => {
    evt.preventDefault()
    onSubmit({
      title,
      description,
    })
  }

  return (
    <CreatePostFormComponent noValidate onSubmit={handleSubmit}>
      <FormTitle>Создание поста</FormTitle>
      <InputsFieldSet>
        <TitleInput onChange={handleEmailChange} value={title}/>
        {validationError['title'] && <ErrorMessageComponent>{validationError['title']}</ErrorMessageComponent>}
        <DescriptionInput onChange={handleDescriptionChange} value={description}/>
        {validationError['description'] && <ErrorMessageComponent>{validationError['description']}</ErrorMessageComponent>}
      </InputsFieldSet>
      {createPostError && <ErrorMessageComponent>{createPostError}</ErrorMessageComponent>}
      <Button className="register-form__submitButton" type='submit'>Создать</Button>
    </CreatePostFormComponent>
  );
};

export default CreatePostForm;
