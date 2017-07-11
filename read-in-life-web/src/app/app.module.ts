import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PostService } from './service/post.service';
import { TimelineComponent } from './timeline/timeline.component';
import { UserComponent } from './user/user.component';

// 小组件
import { PostBriefComponent } from './component/post-brief/post-brief.component';
import { PostDetailedComponent } from './component/post-detailed/post-detailed.component';
import { NavigateToComponent } from './component/navigate-to/navigate-to.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    UserComponent,
    PostBriefComponent,
    PostDetailedComponent,
    NavigateToComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,

    AppRoutingModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
