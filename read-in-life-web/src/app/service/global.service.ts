/**
 * Created by glrh11 on 17-7-12.
 * 存储一些全局的数据
 * https://stackoverflow.com/questions/33598153/angular-2-whats-the-best-way-\
 * to-store-global-variables-like-authentication-tok
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Utility } from '../utility/utility';
import { environment } from '../../environments/environment';
import { User } from "./user";
import { UserService } from "./user.service";


@Injectable()
export class GlobalService {

  constructor (private userService: UserService) {}

  myself: User;
  errorMessage: string;

  testValue: number;

  calCount: number = 0;

  // 获取用户本人的相关信息
  initMyself() {
    this.userService.getSelfUser()
      .subscribe(
        data => this.myself = data,
        error => this.errorMessage = <any>error);
  }

  getMyself(): User {
    if (!this.myself) {
      this.initMyself()
    }
    return this.myself
  }

  getTestValue() {
    if (!this.testValue) {
      this.testValue = 10;
      this.calCount += 1;

    }
    return this.testValue + this.calCount
  }

}
