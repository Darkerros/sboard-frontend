import React, {useCallback} from 'react';
import {useAppSelector} from "../../hooks/use-app-selector";
import CreatePostModal from "../../components/create-post-modal/create-post-modal";
import {ICreatePostParams, IUpdatePostParams} from "../../api/post-api/post-api";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {createPostThunk} from "../../services/thunks/create-post-thunk";
import {createPostModalActions} from "../../services/reducers/create-post-modal-reducer";
import {getPostsThunk} from "../../services/thunks/get-post-thunk";
import UpdatePostModal from "../../components/update-post-modal/update-post-modal";
import {updatePostModalActions} from "../../services/reducers/update-post-modal-reducer";
import {updatePostThunk} from "../../services/thunks/update-post-thunk";

const Modals = () => {
  const dispatch = useAppDispatch()
  const {
    isModalOpen: isPostModalOpen,
    validationErrors: createPostValidationErrors,
    error: createPostError
  } = useAppSelector(state => state.createPostModal)
  const {
    post: updatePost,
    isModalOpen: isUpdatePostModalOpen,
    validationErrors: updatePostModalValidationErrors,
    error: updatePostModalError
  } = useAppSelector(state => state.updatePostModal)

  const handleCloseCreatePostModal = useCallback(() => dispatch(createPostModalActions.closeModal()),[dispatch])
  const hadleSubmitCreatePostForm = useCallback((postData: ICreatePostParams) => dispatch(createPostThunk(postData)).unwrap().then(() => dispatch(getPostsThunk())).then(() => handleCloseCreatePostModal()).catch(() => {}),[dispatch, handleCloseCreatePostModal])

  const handleCloseUpdatePostModal = useCallback(() => dispatch(updatePostModalActions.closeModal()),[dispatch])
  const hadleSubmitUpdatePostForm = useCallback((updatePostData: IUpdatePostParams) => dispatch(updatePostThunk(updatePostData)).unwrap().then(() => handleCloseUpdatePostModal()).catch(() => {}),[dispatch, handleCloseUpdatePostModal])

  return (
    <>
      { isPostModalOpen && <CreatePostModal onClose={handleCloseCreatePostModal} onSubmit={hadleSubmitCreatePostForm} createPostError={createPostError} validationError={createPostValidationErrors} />}
      { isUpdatePostModalOpen && updatePost && <UpdatePostModal post={updatePost} onClose={handleCloseUpdatePostModal} onSubmit={hadleSubmitUpdatePostForm} createPostError={updatePostModalError} validationError={updatePostModalValidationErrors} />}
    </>
  )

};

export default Modals;
