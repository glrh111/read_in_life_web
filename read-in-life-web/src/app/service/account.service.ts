/**
 * Created by glrh11 on 17-7-11.
 *
 * 提供登录, 退出登录等功能
 *
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Utility } from '../utility/utility';
import { environment } from '../../environments/environment';

import { Account } from './account';
import { GlobalService } from './global.service';


@Injectable()
export class AccountService {

  constructor (private http: Http, private globalService: GlobalService, private router: Router) {}

  // 登录web端. 只是一个简单的操作.
  // POST /account/log_in
  // 返回 true, false. 是否登录成功.
  // 需要接受一个回调函数. 登录成功, 登录失败显示弹窗
  logIn(account: Account): Observable<number> {
    let url = environment.api_url + "/account/log_in";
    let that = this;
    return this.http.post(
      url,
      JSON.stringify({
        login_type: 1,
        username: account.username,
        password: account.password
      }),
      {
        withCredentials: true,
      })
      .map(this.afterLogIn(that))
      .catch(Utility.handleError);
  }

  afterLogIn(that) {
    return function (res: Response) {
      let fun = Utility.dealWithResponse('code'); // (res: Response)=>any

      let code = fun(res); // 1 success; 2 error

      if (1==code) {
        // 跳转到index
        that.globalService.initMyself();
        console.log("in afterLogIn");
        that.router.navigate(['']);
      } else {
        // 提示密码错误
        console.log("密码错误");
      }

      return code
    }

  }

  // 退出登录.
  // POST /account/log_out
  // 并且将全局中的数据清理了
  logOut(): Observable<number> {
    let url = environment.api_url + "/account/log_out";
    console.log("in account service: log out ", url);
    return this.http.post(
      url,
      JSON.stringify({}),
      { withCredentials: true }
    )
      .map(this.afterLogOut)
      .catch(Utility.handleError);
  }

  afterLogOut(res: Response) {
    let fun = Utility.dealWithResponse('code');
    this.globalService.initMyself();
    return fun(res)
  }



}
