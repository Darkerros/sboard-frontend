import React, {ChangeEvent, useEffect, useState} from 'react';
import Input from "../../../../ui/input/input";
import {styled} from "styled-components";
import {useAppDispatch} from "../../../../hooks/use-app-dispatch";
import {getPostsThunk} from "../../../../services/thunks/get-post-thunk";

const SearchPostFormComponent = styled.form`
  width: 100%;
  max-width: 250px;
`

const SearchPostForm = () => {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')

  useEffect(() => {
    dispatch(getPostsThunk(query))
  },[query, dispatch])

  const handlerSearchChange = (evt: ChangeEvent<HTMLInputElement>) => setQuery(evt.currentTarget.value)

  return (
    <SearchPostFormComponent>
      <Input type={'text'} name={'query'} placeholder={'Введите запрос для поиска'} onChange={handlerSearchChange}/>
    </SearchPostFormComponent>
  );
};

export default SearchPostForm;
