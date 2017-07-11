import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';
import { Post } from './service/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Read In Life';
  postList = [];
  errorMessage: string;


  constructor (private postService: PostService) {}

  ngOnInit() { this.getPostList(); }

  getPostList() {
    this.postService.getTimelingPostList()
      .subscribe(
        data => this.postList = data,
        error =>  this.errorMessage = <any>error);
  }

}
