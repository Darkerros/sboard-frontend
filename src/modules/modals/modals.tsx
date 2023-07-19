import React, { useCallback } from 'react';

import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getPostsThunk } from '../../services/thunks/get-post-thunk';
import { createPostThunk } from '../../services/thunks/create-post-thunk';
import { updatePostThunk } from '../../services/thunks/update-post-thunk';
import { createPostModalActions } from '../../services/reducers/create-post-modal-reducer';
import { updatePostModalActions } from '../../services/reducers/update-post-modal-reducer';

import { ICreatePostParams, IUpdatePostParams } from '../../api/post-api/post-api';

import CreatePostModal from '../../modals/create-post-modal/create-post-modal';
import UpdatePostModal from '../../modals/update-post-modal/update-post-modal';


const Modals = () => {
  const dispatch = useAppDispatch();
  const {
    isModalOpen: isPostModalOpen,
    validationErrors: createPostValidationErrors,
    error: createPostError,
  } = useAppSelector(state => state.createPostModal);
  const {
    post: updatePost,
    isModalOpen: isUpdatePostModalOpen,
    validationErrors: updatePostModalValidationErrors,
    error: updatePostModalError,
  } = useAppSelector(state => state.updatePostModal);

  const handleCloseCreatePostModal = useCallback(() => dispatch(createPostModalActions.closeModal()), [dispatch]);
  const hadleSubmitCreatePostForm = useCallback((postData: ICreatePostParams) => dispatch(createPostThunk(postData)).unwrap().then(() => dispatch(getPostsThunk())).then(() => handleCloseCreatePostModal()).catch(() => {
  }), [dispatch, handleCloseCreatePostModal]);

  const handleCloseUpdatePostModal = useCallback(() => dispatch(updatePostModalActions.closeModal()), [dispatch]);
  const hadleSubmitUpdatePostForm = useCallback((updatePostData: IUpdatePostParams) => dispatch(updatePostThunk(updatePostData)).unwrap().then(() => handleCloseUpdatePostModal()).catch(() => {
  }), [dispatch, handleCloseUpdatePostModal]);

  return (
    <>
      {isPostModalOpen && <CreatePostModal onClose={handleCloseCreatePostModal} onSubmit={hadleSubmitCreatePostForm}
                                           createPostError={createPostError}
                                           validationError={createPostValidationErrors} />}
      {isUpdatePostModalOpen && updatePost &&
        <UpdatePostModal post={updatePost} onClose={handleCloseUpdatePostModal} onSubmit={hadleSubmitUpdatePostForm}
                         updatePostError={updatePostModalError} validationError={updatePostModalValidationErrors} />}
    </>
  );

};

export default Modals;
