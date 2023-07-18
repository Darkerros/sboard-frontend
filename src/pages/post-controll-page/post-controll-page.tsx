import React, {useEffect} from 'react';
import PostControllSection
  from "../../modules/post-controll-section/components/post-controll-section/post-controll-section";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {getPostsThunk} from "../../services/thunks/get-post-thunk";

const PostControllPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPostsThunk())
  },[dispatch])

  return (
    <main>
      <PostControllSection/>
    </main>
  );
};

export default PostControllPage;
