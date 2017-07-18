/**
 * Created by glrh11 on 17-7-11.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post }     from './post';
import { Utility } from '../utility/utility';
import { environment } from '../../environments/environment';


@Injectable()
export class PostService {

  constructor (private http: Http) {}

  // 获取index页面的文章列表
  // GET /post
  getTimelingPostList(): Observable<Post[]> {
    let url = environment.api_url + "/post";

    return this.http.get(url, {withCredentials: true})
      .map(Utility.dealWithResponse('post_list'))
      .catch(Utility.handleError);
  }

  getPostBYPostId(post_id: number): Observable<Post> {
    let url = environment.api_url + "/post/" + post_id;

    return this.http.get(url, {withCredentials: true})
      .map(Utility.dealWithResponse('post'))
      .catch(Utility.handleError);
  }

  // 更新post的信息
  // PUT /post/:post_id
  // update_type: 1 content; 2 permission
  updateAPost(post_id: number, update_type: number, update_info: { [field: string]: any; }): Observable<number> {
    let url = environment.api_url + "/post/" + post_id;
    update_info.update_type = update_type;
    return this.http.put(
      url,
      JSON.stringify(update_info),
      {withCredentials:true}
    )
      .map(Utility.dealWithResponse('code'))
      .catch(Utility.handleError);
  }

  // 新建文章
  // POST /post/
  newAPost(): Observable<Post> {
    let url = environment.api_url + "/post/";

    return this.http.post(
      url,
      '',
      {withCredentials:true}
    )
      .map(Utility.dealWithResponse('post'))
      .catch(Utility.handleError);
  }

}
