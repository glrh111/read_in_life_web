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
const appRoutes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  { path: '',   redirectTo: '/timeline', pathMatch: 'full' },
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