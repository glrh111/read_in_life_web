import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostService } from '../../service/post.service';
import { Post } from '../../service/post';

import { markdown } from 'markdown';
import {NoSwitchCaseFallThroughWalker} from "tslint/lib/rules/noSwitchCaseFallThroughRule";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.css']
})
export class PostDetailedComponent implements OnInit {

  post: Post;
  errorMessage: string;
  htmlContent: string;
  publishButtonContent: string;

  post_id: number;


  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    document.body.style.background = "#ffffff";
    this.post_id = +this.route.snapshot.params['post_id'];

    this.refreshContent();
  }

  refreshContent() {
    let that = this;
    // get post by post_id
    this.postService.getPostBYPostId(this.post_id)
      .subscribe(
        this.parseMarkdown(that),
        error =>  this.errorMessage = <any>error);
  }

  parseMarkdown(that) {

    return function (data: Post) {
      that.post = data;
      // parse
      that.htmlContent = markdown.toHTML(that.post.content || '');

      let is_available_to_other = that.post.is_available_to_other;
      if (is_available_to_other) {
        that.publishButtonContent = "转为私密";
      } else {
        that.publishButtonContent = "发布";
      }
    }

  }

  // 发布一篇文章: 弹出对话框.
  edit() {
    let that = this;

    this.postService.updateAPost(
      that.post.post_id,
      2,
      { available_to_other: !that.post.is_available_to_other }
    ).subscribe(
      this.afterEditPost(that),
      error => this.errorMessage = <any>error
    );
  }

  afterEditPost(that) {
    return function (code: number) {
      // window.location.reload();
      that.refreshContent();
      // that.router.navigate(['/a_r/post_detailed', that.post.post_id]);
      // if (1==code) {
      //   // 提示更新成功
      //   that.newPostMessage = "更新文章成功";
      //   // 跳转到
      //
      // } else {
      //   // 提示建立文章失败
      //   that.newPostMessage = "更新失败, 请稍后再试.";
      // }
      // // 框框消失
      // setTimeout(function () {
      //   that.newPostMessage = "";
      // }, 3000)
    }
  }

}
