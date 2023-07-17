import createApiReguest from "../create-api-reguest";
import {API_REQUEST_METHOD} from "../types/api-reguest-method";
import {GetUserResponse} from "./responses/get-user-response";

export const getUser = async ():Promise<GetUserResponse> => {
  return await createApiReguest('/user/me',API_REQUEST_METHOD.GET)
}
