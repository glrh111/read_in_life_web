import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostService } from '../../service/post.service';
import { Post } from '../../service/post';

import { markdown } from 'markdown';


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


  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {

    document.body.style.background = "#ffffff";
    let post_id = +this.route.snapshot.params['post_id'];

    console.log('in post-detailed OnInit: ', post_id);

    let that = this;
    // get post by post_id
    this.postService.getPostBYPostId(post_id)
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
  publish() {

  }

}
