import {UserResource} from "./user-resource";

export interface PostResource {
  /*
   * Уникальный индефикатор статьи
   */
  id: number;
  /*
   * Название статьи
   */
  title: string;
  /*
   * Описание статьи
   */
  description: string | null;
  /*
   * Кем была создана статья
   */
  createByUser: UserResource;
  /*
   * Кем последний раз редактировалась статья
   */
  lastUpdateByUser: UserResource;
}
