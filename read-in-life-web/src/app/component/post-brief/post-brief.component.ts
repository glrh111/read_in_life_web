import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../service/post';


@Component({
  selector: 'app-post-brief',
  templateUrl: './post-brief.component.html',
  styleUrls: ['./post-brief.component.css']
})
export class PostBriefComponent implements OnInit {

  title: string = "我曹";

  @Input()
  post: Post;

  // 代表是否显示用户相关信息
  @Input()
  if_display_user: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
