import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../service/global.service';
import { UserService } from '../service/user.service';
import { UserPost } from '../service/post';
import {User} from "../service/user";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  myself: User;
  myselfPostList: UserPost = new UserPost();
  errorMessage: string;

  postLabelList = [
    ['not_published', '私密文章'],
    ['published','已发布文章']
  ];

  constructor(
    private userService: UserService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    // 判断这里边是否有信息, 如果没有的话, 强制全局数据刷新
    let that = this;
    this.getMyselfPostList();

    // 获取我的最新信息
    this.userService.getMyself()
      .subscribe(
        function (data) {
          that.myself = data;
        },
        error => this.errorMessage = <any>error
      );

    document.body.style.background = '#fff';
  }

  // 本人的文章列表
  getMyselfPostList() {
    this.userService.getMyselfPostList()
      .subscribe(
        data => this.myselfPostList = data,
        error => this.errorMessage = <any>error);
  }

  // edit 编辑个人信息
  edit() {
    if (!this.myself) return;
    this.router.navigate(['/a_r/mine_edit']);
  }

}
