import React, {FC} from 'react';
import Modal from "../modal/modal";
import {IUpdatePostParams} from "../../api/post-api/post-api";
import {UpdatePostForm} from "../../modules/update-post-form";
import {PostResource} from "../../api/resources/post-resource";

interface CreatePostModalProps {
  post: PostResource
  onClose: VoidFunction;
  onSubmit: (updatePostData: IUpdatePostParams) => void;
  createPostError: string | null;
  validationError: Record<string, string>;
}

const UpdatePostModal:FC<CreatePostModalProps> = ({post, onClose, onSubmit, createPostError, validationError}) => {

  return (
    <Modal onClose={onClose}>
      <UpdatePostForm post={post} onSubmit={onSubmit} createPostError={createPostError} validationError={validationError}/>
    </Modal>
  )
}


export default UpdatePostModal;
