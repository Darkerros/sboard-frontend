import createApiReguest from "../create-api-reguest";
import {API_REQUEST_METHOD} from "../types/api-reguest-method";
import {GetPostResponse} from "./responses/get-post-response";
import {CreatePostResponse} from "./responses/create-post-response";
import {UpdatePostResponse} from "./responses/update-post-response";

export interface ICreatePostParams {
  /*
   * Название статьи
   */
  title: string;
  /*
   * Описание статьи
   */
  description: string | null;
}

export interface IUpdatePostParams {
  /*
   * Идентификатор статьи которую обновляем
   */
  postId: number;
  /*
   * Название статьи
   */
  title: string;
  /*
   * Описание статьи
   */
  description: string | null;
}

export const getPosts = async (query?: string, limit?: number, page?: number): Promise<GetPostResponse> => {
  return await createApiReguest('/post/list',API_REQUEST_METHOD.GET, {
    params: {
      query,
      limit,
      page,
    }
  })
}

export const createPost = async (postData: ICreatePostParams): Promise<CreatePostResponse> => {
  return await createApiReguest('/post/create',API_REQUEST_METHOD.POST, {
    data: {
      ...postData
    }
  })
}

export const updatePost = async (postData: IUpdatePostParams): Promise<UpdatePostResponse> => {
  return await createApiReguest('/post/update',API_REQUEST_METHOD.POST, {
    data: {
      ...postData
    }
  })
}

export const deletePost = async (postId: number): Promise<any> => {
  return await createApiReguest(`/post/${postId}`,API_REQUEST_METHOD.DELETE)
}
