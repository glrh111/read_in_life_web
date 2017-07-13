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

  myself: User;

  constructor (
    private userService: UserService,
    private globalService: GlobalService,
    private accountService: AccountService,
    private router: Router,
    private location: Location
  ) {}

  // 检查myself是否发生改变.
  ngAfterContentChecked() {
    this.myself = this.globalService.getMyself();
    console.log('in AppComponent AfterContentChecked: ', this.title);
  }

  ngOnInit() {
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

  }

  logOut() {
    console.log("登录出去: in log out");
    this.accountService.logOut()
      .subscribe(
        data => console.log("log out", data),
        error => this.errorMessage = <any>error
      );
  }

  back() {
    this.location.back();
  }

}
