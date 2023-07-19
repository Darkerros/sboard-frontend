import React, {FC} from 'react';

import {ICreatePostParams} from "../../api/post-api/post-api";
import {CreatePostForm} from "../../forms/create-post-form";

import Modal from "../../components/modal/modal";


interface CreatePostModalProps {
  /*
   * Колбек страбатывающий при закрытии
   */
  onClose: VoidFunction;
  /*
   * Колбек страбатывающий при подтверждении отправки формы
   */
  onSubmit: ({ title, description }: ICreatePostParams) => void;
  /*
   * Ошибка после отправки формы
   */
  createPostError: string | null;
  /*
   * Ошибки валидации формы
   */
  validationError: Record<string, string>;
}

const CreatePostModal:FC<CreatePostModalProps> = ({onClose, onSubmit, createPostError, validationError}) => {

  return (
    <Modal onClose={onClose}>
      <CreatePostForm onSubmit={onSubmit} createPostError={createPostError} validationError={validationError}/>
    </Modal>
  )
}


export default CreatePostModal;
