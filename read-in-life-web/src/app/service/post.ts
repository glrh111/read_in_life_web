/**
 * Created by glrh11 on 17-7-11.
 */

import {User} from './user';

export class Post {
  post_id: number;
  title: number;
  abstract: string;
  content: string;

  utime: number;

  is_available_to_other: boolean;
  is_self: boolean;
  user_info: User;
}
