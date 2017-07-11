import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

import { PostService } from '../../service/post.service';
import { Post } from '../../service/post';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post: Post;
  errorMessage: string;

  title: string;
  abstract: string;
  content: string;

  // formC = new FormControl('', [
  //   Validators.required
  // ]);

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    document.body.style.background = "#ffffff";
    let post_id = +this.route.snapshot.params['post_id'];
    let that = this;
    // get post by post_id
    this.postService.getPostBYPostId(post_id)
      .subscribe(
        this.dealWithData(that),
        error =>  this.errorMessage = <any>error);
  }

  // 赋值
  dealWithData(that) {

    return function (data: Post) {
      that.post = data;
      // parse

      that.title = that.post.title;
      that.abstract = that.post.abstract;
      that.content = that.post.content;
    }

  }

  // 编辑完成: 跳转到这一篇文章的详情页面
  ok() {

  }

  // 取消编辑: 提示保存
  cancel() {

  }


}
