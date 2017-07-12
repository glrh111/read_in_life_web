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

import { Utility } from '../utility/utility';
import { environment } from '../../environments/environment';

import { Account } from './account';


@Injectable()
export class AccountService {

  constructor (private http: Http) {}

  // 登录web端. 只是一个简单的操作.
  // POST /account/log_in
  logIn(account: Account): Observable<number> {
    let url = environment.api_url + "/account/log_in";
    return this.http.post(
      url,
      JSON.stringify({
        login_type: 1,
        username: account.username,
        password: account.password
      }),
      {
        withCredentials: false,
      })
      .map(Utility.dealWithResponse('code'))
      .catch(Utility.handleError);
  }



}
