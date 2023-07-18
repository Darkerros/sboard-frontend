import {PostResource} from "../../resources/post-resource";

export interface GetPostResponse {
  /*
   * Количество доступных страниц
   */
  pagesCount: number;
  /*
   * Найденное количество постов
   */
  postCount: number;
  /*
   * Найденные посты
   */
  posts: PostResource[];
}
