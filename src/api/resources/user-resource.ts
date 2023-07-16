export interface UserResource {
  /*
   * Уникальный индефикатор пользователя
   */
  id: number;
  /*
   * Почта пользователя
   */
  email: string;
  /*
   * Ник пользователя
   */
  nickname: string | null;
}
