import React, { useCallback } from 'react';
import { styled } from 'styled-components';

import { PostResource } from '../../../../api/resources/post-resource';

import { useAppSelector } from '../../../../hooks/use-app-selector';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { getPostsThunk } from '../../../../services/thunks/get-post-thunk';
import { deletePostThunk } from '../../../../services/thunks/delete-post-thunk';
import { updatePostModalActions } from '../../../../services/reducers/update-post-modal-reducer';

import PostCard from '../../../../components/post-card/post-card';

const PostListComponent = styled.div`
  margin-top: 25px;

  gap: 15px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1550px) {
    & {
      justify-content: center;
    }
  }
`;

const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts.posts);

  const handlePostEdit = useCallback((post: PostResource) => dispatch(updatePostModalActions.openModal(post)), [dispatch]);
  const handlePostDelete = useCallback((post: PostResource) => dispatch(deletePostThunk(post.id)).then(() => dispatch(getPostsThunk())), [dispatch]);

  return (
    <PostListComponent>
      {posts.map(post => <PostCard key={post.id} post={post} onDelete={handlePostDelete} onEdit={handlePostEdit} />)}
    </PostListComponent>
  );
};

export default PostsList;
