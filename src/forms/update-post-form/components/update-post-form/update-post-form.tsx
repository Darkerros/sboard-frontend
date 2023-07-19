import React, { FC, FormEvent, useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { IUpdatePostParams } from '../../../../api/post-api/post-api';
import { PostResource } from '../../../../api/resources/post-resource';

import Button from '../../../../ui/button/button';
import FormTitle from '../../../../components/form-title/form-title';
import TitleInput from '../../../../controls/title-input/title-input';
import DescriptionInput from '../../../../controls/description-input/description-input';

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

interface CreatePostFormProps {
  /*
   * Пост для редактирования
   */
  post: PostResource;
  /*
   * Ошибка при отправки формы
   */
  updatePostError: string | null;
  /*
   * Ошибки валидации формы
   */
  validationError: Record<string, string>;
  /*
   * Колбек срабатывающий при подтверждении отправки формы
   */
  onSubmit: (updatePostData: IUpdatePostParams) => void;
}

const UpdatePostForm: FC<CreatePostFormProps> = ({ onSubmit, updatePostError, validationError, post }) => {
  const [title, setTitle] = useState<string>(() => post.title);
  const handleEmailChange = useCallback((value: string) => setTitle(value), []);

  const [description, setDescription] = useState<string>(() => post.description || '');
  const handleDescriptionChange = useCallback((value: string) => setDescription(value), []);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onSubmit({
      postId: post.id,
      title,
      description,
    });
  };

  return (
    <CreatePostFormComponent noValidate onSubmit={handleSubmit}>
      <FormTitle>Создание поста</FormTitle>
      <InputsFieldSet>
        <TitleInput onChange={handleEmailChange} value={title} />
        {validationError['title'] && <ErrorMessageComponent>{validationError['title']}</ErrorMessageComponent>}
        <DescriptionInput onChange={handleDescriptionChange} value={description} />
        {validationError['description'] &&
          <ErrorMessageComponent>{validationError['description']}</ErrorMessageComponent>}
      </InputsFieldSet>
      {updatePostError && <ErrorMessageComponent>{updatePostError}</ErrorMessageComponent>}
      <Button className='register-form__submitButton' type='submit'>Обновить</Button>
    </CreatePostFormComponent>
  );
};

export default UpdatePostForm;
