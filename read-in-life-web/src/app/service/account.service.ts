/**
 * Created by glrh11 on 17-7-11.
 *
 * 提供登录, 退出登录等功能
 *
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
export class AccountService {

  constructor (private http: Http) {}

  // 获取index页面的文章列表
  // GET /post
  getTimelingPostList(): Observable<Post[]> {
    let url = environment.api_url + "/post";

    return this.http.get(url)
      .map(Utility.dealWithResponse('post_list'))
      .catch(Utility.handleError);
  }









}
