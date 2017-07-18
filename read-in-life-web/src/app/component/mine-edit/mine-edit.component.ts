import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalService } from '../../service/global.service';
import { UserService } from '../../service/user.service';
import {User} from "../../service/user";


@Component({
  selector: 'app-mine-edit',
  templateUrl: './mine-edit.component.html',
  styleUrls: ['./mine-edit.component.css']
})
export class MineEditComponent implements OnInit {

  errorMessage: string;

  myself: User;

  pennameFormControl: FormControl;
  mottoFormControl: FormControl;
  avatarFormControl: FormControl;

  updateMessage: string = "";

  constructor(
    private userService: UserService,
    private globalService: GlobalService,
    // public dialog: MdDialog
    private router: Router
  ) {
    this.pennameFormControl = new FormControl(
      '',
      [Validators.required]
    );
    this.mottoFormControl = new FormControl(
      '',
      [Validators.required]
    );
    this.avatarFormControl = new FormControl(
      '',
      [Validators.required]
    );
  }

  edit() {
    let that = this;
    this.userService.updateUserInfo(
      2,
      {
        penname: that.pennameFormControl.value,
        motto: that.mottoFormControl.value,
        avatar: that.avatarFormControl.value
      }
    )
      .subscribe(
        function (code: number) {
          if (1==code) {
            // 提示登录成功并且跳转
            that.updateMessage = "修改成功";
            // 强制刷新相关信息
            that.globalService.initMyself();
            that.router.navigate(['/a_r/mine']);
          } else {
            // 提示登录失败
            that.updateMessage = "修改失败, 请稍后再试.";
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  initMyselfInfo() {
    let that = this;
    this.userService.getMyself()
      .subscribe(
        function (data) {
          that.myself = data;
          that.pennameFormControl.setValue(data.penname);
          that.avatarFormControl.setValue(data.avatar);
          that.mottoFormControl.setValue(data.motto);

        },
        error => this.errorMessage = <any>error);
  }


  ngOnInit() {
    document.body.style.background = '#ffffff';
    this.initMyselfInfo();
  }

}
