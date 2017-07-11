import { Component } from '@angular/core';
import { PostService } from './service/post.service';
import { Post } from './service/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Read In Life';
  postList = [];
  errorMessage: string;

  constructor () {}

}
