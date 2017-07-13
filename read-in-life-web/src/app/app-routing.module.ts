/**
 * Created by glrh11 on 17-7-11.
 * 参考: https://angular.cn/docs/ts/latest/guide/router.html
 * /user 用户页面
 * /post 文章详情页面
 * /edit-post 编辑新建文章页面
 * /timeline  首页(默认显示这一页)
 */
import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { UserComponent } from './user/user.component';
import { PostDetailedComponent } from './component/post-detailed/post-detailed.component';
import { PostEditComponent } from './component/post-edit/post-edit.component';
import { MineComponent } from './mine/mine.component';

// 登录注册模块
import { AccountRegisterComponent } from './component/account-register/account-register.component';
import { AccountLoginComponent } from './component/account-login/account-login.component';

const appRoutes: Routes = [
  {
    path: '#timeline',
    component: TimelineComponent,
  },
  {
    path: '#user',
    component: UserComponent,
  },
  {
    path: '#mine',
    component: MineComponent,
  },
  {
    path: '#post_detailed/:post_id',
    component: PostDetailedComponent,
  },
  {
    path: '#post_edit/:post_id',
    component: PostEditComponent,
  },

  // 登录注册相关
  {
    path: '#register',
    component: AccountRegisterComponent,
  },
  {
    path: '#login',
    component: AccountLoginComponent,
  },

  { path: '', component: TimelineComponent, },
  // { path: '',   redirectTo: '/timeline', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule {}
