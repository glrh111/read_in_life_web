import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { PostService } from './service/post.service';
import { Post } from './service/post';
import { UserService } from './service/user.service';
import { User } from './service/user';

import { GlobalService } from './service/global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  title = 'Read In Life';
  postList = [];
  errorMessage: string;

  user: User;

  constructor (private userService: UserService, private globalService: GlobalService) {}


  ngAfterContentChecked() {
    console.log('in AppComponent ngAfterContentChecked: ', this.title);
  }

  ngAfterViewChecked(){
    console.log('in AppComponent ngAfterViewChecked: ', this.title);

  }

  ngOnInit() {
    console.log('in AppComponent ngOnInit: ', this.title);
    // this.userService.getSelfUser()
    //   .subscribe(
    //     data => this.user = data,
    //     error => this.errorMessage = <any>error);
    console.log("我曹", this.globalService.getMyself(), this.globalService.getTestValue())

  }

}
