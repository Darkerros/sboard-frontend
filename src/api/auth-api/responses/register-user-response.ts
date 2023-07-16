import {UserResource} from "../../resources/user-resource";

export interface RegisterUserResponse extends UserResource {
  /*
   * Токен для работы авторизованных ендпоинтов
   */
  accessToken: string;
  /*
   * Токен для обновления токена доступа
   */
  refreshToken: string;
}
