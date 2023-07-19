import React, { useCallback } from 'react';
import { styled } from 'styled-components';

import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { createPostModalActions } from '../../../../services/reducers/create-post-modal-reducer';

import SearchPostForm from '../search-post-form/search-post-form';
import Button from '../../../../ui/button/button';


const PostSectionActionsContainerComponent = styled.div`
  top: 0;
  padding: 10px 0;
  position: sticky;
  background: white;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostSectionActionsContainer = () => {
  const dispatch = useAppDispatch();
  const handleClickCreatePost = useCallback(() => dispatch(createPostModalActions.openModal()), [dispatch]);

  return (
    <PostSectionActionsContainerComponent>
      <SearchPostForm />
      <Button onClick={handleClickCreatePost}>Создать новый пост</Button>
    </PostSectionActionsContainerComponent>
  );
};

export default PostSectionActionsContainer;
