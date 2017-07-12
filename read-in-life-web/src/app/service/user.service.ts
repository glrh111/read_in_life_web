/**
 * Created by glrh11 on 17-7-12.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Utility } from '../utility/utility';
import { environment } from '../../environments/environment';
import {User} from "./user";


@Injectable()
export class UserService {

  constructor (private http: Http) {}

  // 获取用户本人的相关信息
  // GET /user/
  getSelfUser(): Observable<User> {
    let url = environment.api_url + "/user";

    return this.http.get(url, {withCredentials: true})
      .map(Utility.dealWithResponse('user'))
      .catch(Utility.handleError);
  }


}
