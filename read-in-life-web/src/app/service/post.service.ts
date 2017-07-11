/**
 * Created by glrh11 on 17-7-11.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post }     from './post';
import { environment } from '../../environments/environment';

let dealWithResponse = function (res: Response) {
  let body = res.json();
  console.log("reveived: ", body);
  return body.post_list;
};

let handleError = function  (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
};

// let headers = new Headers({'Access-Control-Allow-Origin': '*'});

@Injectable()
export class PostService {

  constructor (private http: Http) {}

  // 获取index页面的文章列表
  // GET /post
  getTimelingPostList(): Observable<Post[]> {
    let url = environment.api_url + "/post";

    return this.http.get(url)
      .map(dealWithResponse)
      .catch(handleError);
  }

  // 获取某个用户的文章列表
  // GET /post/<user_id>
  getUserPostList(user_id) {

  }

  // 获取用户自己的文章列表
  // GET /user/post
  getSelfPostList() {

  }






}
