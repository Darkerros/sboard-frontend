import React, { FC } from 'react';

import { IUpdatePostParams } from '../../api/post-api/post-api';
import { UpdatePostForm } from '../../forms/update-post-form';
import { PostResource } from '../../api/resources/post-resource';

import Modal from '../../components/modal/modal';

interface CreatePostModalProps {
  post: PostResource;
  /*
   * Колбек страбатывающий при закрытии
   */
  onClose: VoidFunction;
  /*
   * Ошибка после отправки формы
   */
  updatePostError: string | null;
  /*
   * Ошибки валидации формы
   */
  validationError: Record<string, string>;
  /*
   * Колбек страбатывающий при подтверждении отправки формы
   */
  onSubmit: (updatePostData: IUpdatePostParams) => void;
}

const UpdatePostModal: FC<CreatePostModalProps> = ({ post, onClose, onSubmit, updatePostError, validationError }) => {

  return (
    <Modal onClose={onClose}>
      <UpdatePostForm post={post} onSubmit={onSubmit} updatePostError={updatePostError}
                      validationError={validationError} />
    </Modal>
  );
};


export default UpdatePostModal;
