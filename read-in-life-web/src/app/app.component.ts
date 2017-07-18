import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PostService } from './service/post.service';
import { Post } from './service/post';
import { UserService } from './service/user.service';
import { User } from './service/user';

import { GlobalService } from './service/global.service';
import { AccountService } from './service/account.service';
import { Account } from './service/account';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'Read In Life';
  postList = [];
  errorMessage: string;

  newPostMessage: string;

  myself: User;

  constructor (
    private userService: UserService,
    private globalService: GlobalService,
    private accountService: AccountService,
    private router: Router,
    private location: Location,
    private postService: PostService
  ) {}

  // 检查myself是否发生改变.
  ngAfterContentChecked() {
    this.myself = this.globalService.getMyself();
    console.log('in AppComponent AfterContentChecked: ', this.title);
  }

  ngOnInit() {
    let that = this;
    // let acc = new Account();
    // acc.username = 'glrh111';
    // acc.password = '111';
    // this.accountService.logIn(acc)
    //   .subscribe(
    //     code => console.log("login code: ", code),
    //     error => this.errorMessage = <any>error
    //   );

    this.myself = this.globalService.getMyself(true);
    // this.userService.getSelfUser()
    //   .subscribe(
    //     data => this.user = data,
    //     error => this.errorMessage = <any>error);

    this.globalService.initHistoryLength(window.history.length);
  }

  logOut() {
    console.log("登录出去: in log out");
    this.accountService.logOut()
      .subscribe(
        data => console.log("log out", data),
        error => this.errorMessage = <any>error
      );
  }

  // 程序初始化的时候, 记录下history的长度.
  // 防止返回的时候跳出程序
  back() {
    let now_length: number = window.history.length;
    let init_length: number = this.globalService.getHistoryLength();
    if (now_length > init_length) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  newPost() {
    let that = this;
    this.postService.newAPost()
      .subscribe(
        this.afterNewPost(that),
        error => this.errorMessage = <any>error
      );
  }

  afterNewPost(that) {
    return function (post: Post) {
      if (post) {
        // 提示更新成功
        that.newPostMessage = "新建文章成功";
        // 跳转到
        that.router.navigate(['/a_r/post_edit', post.post_id]);
      } else {
        // 提示建立文章失败
        that.newPostMessage = "创建新文章失败, 请稍后再试.";
      }
      // 框框消失
      setTimeout(function () {
        that.newPostMessage = "";
      }, 3000)
    }
  }

}
