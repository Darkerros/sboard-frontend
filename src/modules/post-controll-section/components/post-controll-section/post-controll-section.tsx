import React from 'react';
import {styled} from "styled-components";
import PostSectionActionsContainer from "../post-section-actions-container/post-section-actions-container";
import PostsList from "../posts-list/posts-list";

const PostControllSectionComponent = styled.section`
  margin: 20px;
  padding: 30px 45px;
  background: white;
  
  min-width: 60vw;
  max-width: 900px;
  
  min-height: 600px;
`

const PostControllSection = () => {
  return (
    <PostControllSectionComponent>
      <PostSectionActionsContainer/>
      <PostsList/>
    </PostControllSectionComponent>
  );
};

export default PostControllSection;
