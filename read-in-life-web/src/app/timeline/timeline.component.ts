import { Component, OnInit } from '@angular/core';
import {  } from '@angular/core'

import { PostService } from '../service/post.service';
import { Post } from '../service/post';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  postList: Post[];
  errorMessage: string;
  if_display_user: boolean = true;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList();
    document.body.style.background = '#eeeeee';
  }

  getPostList() {
    this.postService.getTimelingPostList()
      .subscribe(
        data => this.postList = data,
        error =>  this.errorMessage = <any>error);
  }

}
