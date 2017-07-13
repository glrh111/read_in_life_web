/**
 * Created by glrh11 on 17-7-12.
 */

import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Utility } from '../utility/utility';
import { environment } from '../../environments/environment';
import { User } from "./user";
import { UserPost } from './post';


@Injectable()
export class UserService {

  constructor (private http: Http) {}

  // 获取用户本人的相关信息
  // GET /user/
  getMyself(): Observable<User> {
    let url = environment.api_url + "/user";

    return this.http.get(url, {withCredentials: true})
      .map(Utility.dealWithResponse('user'))
      .catch(Utility.handleError);
  }

  // 获取某个用户的信息
  // GET /user/:user_id
  getUserById(user_id: number): Observable<User> {
    let url = environment.api_url + "/user/" + user_id;

    return this.http.get(url, {withCredentials: true})
      .map(Utility.dealWithResponse('user'))
      .catch(Utility.handleError);
  }

  // 获取用户本人的文章信息
  getMyselfPostList(): Observable<UserPost> {
    let url = environment.api_url + "/user/post";

    return this.http.get(url, {withCredentials: true})
      .map(Utility.dealWithResponse('post_list'))
      .catch(Utility.handleError);
  }


}
