import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
  MdDialogModule,
  MdChipsModule,
  MdMenuModule,
  MdTabsModule
} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TimelineComponent } from './timeline/timeline.component';
import { UserComponent } from './user/user.component';
import { MineComponent } from './mine/mine.component';

// 小组件
import { PostBriefComponent } from './component/post-brief/post-brief.component';
import { PostDetailedComponent } from './component/post-detailed/post-detailed.component';
import { NavigateToComponent } from './component/navigate-to/navigate-to.component';
import { PostEditComponent } from './component/post-edit/post-edit.component';
import { AccountRegisterComponent } from './component/account-register/account-register.component';
import { MineEditComponent } from './component/mine-edit/mine-edit.component';

// 防止route替换#, 并传送到后端渲染
import {UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './utility/customUrlSerializer';

// service
import { PostService } from './service/post.service';
import { UserService } from './service/user.service';
import { GlobalService } from './service/global.service';
import { AccountService } from './service/account.service';
import { AccountLoginComponent } from './component/account-login/account-login.component';



@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    UserComponent,
    PostBriefComponent,
    PostDetailedComponent,
    NavigateToComponent,
    PostEditComponent,
    AccountRegisterComponent,
    AccountLoginComponent,
    MineComponent,
    MineEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // md
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule,
    MdChipsModule,
    MdMenuModule,
    MdTabsModule,

    AppRoutingModule
  ],
  providers: [
    PostService,
    UserService,
    AccountService,
    GlobalService,  // 全局数据存放在这里.
    // { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
