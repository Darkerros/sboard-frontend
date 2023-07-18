import React, {FC} from 'react';
import Modal from "../modal/modal";
import {ICreatePostParams} from "../../api/post-api/post-api";
import {CreatePostForm} from "../../modules/create-post-form";

interface CreatePostModalProps {
  onClose: VoidFunction;
  onSubmit: ({ title, description }: ICreatePostParams) => void;
  createPostError: string | null;
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
