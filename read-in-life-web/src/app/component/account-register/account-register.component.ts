import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormControl } from '@angular/forms';
import { Account } from '../../service/account';
import { AccountService } from '../../service/account.service';
import { GlobalService } from '../../service/global.service';

const USERNAME_REGEX = /^[a-zA-Z0-9]+$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9]{3,}$/;

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  acc: Account = new Account();
  errorMessage: string;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;

  registerMessage: string = "等待填写信息";

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    // public dialog: MdDialog
    private router: Router
  ) {
    // 1. 不能为空.
    // 2. 必须是英文字母和数字
    this.usernameFormControl = new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(USERNAME_REGEX)
      ]
    );
    // 1. 不能为空
    // 2. 长度必须大于3
    // 3. 只能是 数字, 英文字母, 标点符号
    this.passwordFormControl = new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(PASSWORD_REGEX)
      ]
    );
  }

  register() {
    let that = this;
    this.accountService.register(this.acc)
      .subscribe(
        this.afterRegister(that),
        error => this.errorMessage = <any>error
      );
  }

  afterRegister(that) {

    return function (code: number) {
      if (1==code) {
        // 提示登录成功并且跳转
        that.registerMessage = "注册成功";
        // 强制刷新相关信息
        that.globalService.initMyself();
        that.router.navigate(['']);
      } else {
        // 提示用户名已经被使用
        that.registerMessage = "用户名已被使用. 换一个";
      }

    }

  }





  ngOnInit() {
    document.body.style.background = '#ffffff';

  }

}
