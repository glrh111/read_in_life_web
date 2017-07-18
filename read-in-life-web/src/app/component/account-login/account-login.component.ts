import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Account } from '../../service/account';
import { AccountService } from '../../service/account.service';
import { GlobalService } from '../../service/global.service';


@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  acc: Account = new Account();
  errorMessage: string;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;

  loginMessage: string = "等待登录";

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    // public dialog: MdDialog
    private router: Router
  ) {
    this.usernameFormControl = new FormControl(
      '',
      [Validators.required]
    );
    this.passwordFormControl = new FormControl(
      '',
      [Validators.required]
    );
  }

  login() {
    let that = this;
    this.accountService.logIn(this.acc)
      .subscribe(
        this.afterLogin(that),
        error => this.errorMessage = <any>error
      );
  }

  // // 对话框
  // openDialog() {
  //   this.dialog.open(DialogOverviewExampleDialog, { data: "我曹, 这是个dialog" } );
  // }

  afterLogin(that) {

    return function (code: number) {
      if (1==code) {
        // 提示登录成功并且跳转
        that.loginMessage = "登录成功";
        // 强制刷新相关信息
        that.globalService.initMyself();
        that.router.navigate(['']);
      } else {
        // 提示登录失败
        that.loginMessage = "密码或用户名错误";
      }
    }

  }



  register() {
    // 跳转到register页面
  }

  ngOnInit() {
    document.body.style.background = '#ffffff';

  }



}
