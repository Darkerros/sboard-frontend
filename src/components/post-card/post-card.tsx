import React, {FC, memo} from 'react';
import {styled} from "styled-components";
import {PostResource} from "../../api/resources/post-resource";
import TrashIcon from "../../ui/icon/trash-icon/trash-icon";
import EditIcon from "../../ui/icon/edit-icon/edit-icon";

const PostCardComponent = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 20px 10px;
  border: solid 1px #dadada;

  gap: 10px;
  display: flex;
  flex-direction: column;
`

const PostCardTitle = styled.p`
  font-size: 14px;
  text-align: start;
  font-weight: bold;

  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PostCardDescription = styled.p`
  font-size: 12px;
  text-align: start;
  font-weight: normal;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;

  line-clamp: 8;
  display: -webkit-box;
  -webkit-line-clamp: 8; /* number of lines to show */
  -webkit-box-orient: vertical;
`

const PostCardCreator = styled.p`
  font-size: 12px;
  font-weight: normal;
  text-align: start;
`

const PostCardLastEdited = styled.p`
  font-size: 12px;
  font-weight: normal;
  text-align: start;
`

const PostCardActionContainer = styled.p`
  gap: 10px;
  display: flex;
  justify-content: space-between;
`
const PostCardActionButton = styled.button`
  padding: 5px 5px;
  
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 3px;
  background: #00a884;
  
  transition: .3s ease-in;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

interface PostCardProps {
  post: PostResource;
  onDelete: (post: PostResource) => void;
  onEdit: (post: PostResource) => void;
}

const PostCard:FC<PostCardProps> = memo(({post, onDelete, onEdit}) => {
  const handleClickDelete = () => onDelete(post);
  const handleClickEdit = () => onEdit(post);

  return (
    <PostCardComponent>
      <PostCardTitle>
        {post.title}
        <PostCardActionContainer>
          <PostCardActionButton onClick={handleClickDelete}>
            <TrashIcon/>
          </PostCardActionButton>
          <PostCardActionButton  onClick={handleClickEdit}>
            <EditIcon/>
          </PostCardActionButton>
        </PostCardActionContainer>
      </PostCardTitle>
      <PostCardDescription>{post.description}</PostCardDescription>
      <PostCardCreator>Создан: {String(post.createByUser.email)}</PostCardCreator>
      <PostCardLastEdited>Последний раз обновлен: {String(post.lastUpdateByUser.email)}</PostCardLastEdited>
    </PostCardComponent>
  );
});

export default PostCard;
