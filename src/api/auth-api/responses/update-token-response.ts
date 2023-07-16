export interface UpdateTokenResponse {
  /*
   * Токен для работы авторизованных ендпоинтов
   */
  accessToken: string;
  /*
   * Токен для обновления токена доступа
   */
  refreshToken: string;
}
