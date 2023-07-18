import createApiReguest from "../create-api-reguest";
import {API_REQUEST_METHOD} from "../types/api-reguest-method";
import {GetPostResponse} from "./responses/get-post-response";

export const getPosts = async (query?: string, limit?: number, page?: number): Promise<GetPostResponse> => {
  return await createApiReguest('/post/list',API_REQUEST_METHOD.GET, {
    params: {
      query,
      limit,
      page,
    }
  })
}
