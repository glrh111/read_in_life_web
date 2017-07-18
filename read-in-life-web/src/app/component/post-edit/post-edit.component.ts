import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  // titleFormControl: FormControl;
  // abstractFormControl: FormControl;
  // contentFormControl: FormControl;
  title: String;
  abstract: String;
  content: String;

  okMessage: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,

  ) {

  }

  ngOnInit() {
    document.body.style.background = "#ffffff";

    // this.titleFormControl = new FormControl(
    //   '',
    //   [Validators.required]
    // );
    // this.abstractFormControl = new FormControl(
    //   '',
    //   [Validators.required]
    // );
    // this.contentFormControl = new FormControl(
    //   '',
    //   [Validators.required]
    // );

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
      // that.titleFormControl.setValue(that.post.title);
      // that.abstractFormControl.setValue(that.post.abstract);
      // that.contentFormControl.setValue(that.post.content);

      that.title = that.post.title;
      that.abstract = that.post.abstract;
      that.content = that.post.content;
    }

  }

  // 编辑完成: 跳转到这一篇文章的详情页面
  ok() {
    let that = this;
    this.postService.updateAPost(
      this.post.post_id,
      1,
      {
        title: that.title,
        abstract: that.abstract,
        content: that.content
      }
    )
      .subscribe(
        this.afterOk(that),
        error => this.errorMessage = <any>error
      );

  }

  afterOk(that) {

    return function (code: number) {
      if (1==code) {
        // 提示更新成功
        that.okMessage = "更新成功";
        // 跳转到
        that.router.navigate(['/a_r/post_detailed', that.post.post_id]);
      } else {
        // 提示登录失败
        that.okMessage = "更新失败,请稍后再试";
      }
    }

  }


}
