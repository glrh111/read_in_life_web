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
import { UserPost } from './post';
import { UserService } from "./user.service";


@Injectable()
export class GlobalService {

  constructor (private userService: UserService) {}

  myself: User;
  myselfPostList: UserPost;

  errorMessage: string;


  // 获取用户本人的相关信息
  initMyself() {
    this.userService.getMyself()
      .subscribe(
        data => this.myself = data,
        error => this.errorMessage = <any>error);
  }

  initMyselfPostList() {
    this.userService.getMyselfPostList()
      .subscribe(
        data => this.myselfPostList = data,
        error => this.errorMessage = <any>error);
  }


  // 登录或者退出登录的时候, 需要主动更新, force=true
  getMyself(force:boolean=false): User {
    if (force) {
      this.initMyself()
    }
    return this.myself
  }

  // 本人的文章列表
  getMyselfPostList(force:boolean=false): UserPost {
    if (force) {
      this.initMyselfPostList()
    }
    return this.myselfPostList
  }



}
