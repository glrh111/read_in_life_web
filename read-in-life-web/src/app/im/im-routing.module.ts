/**
 * Created by glrh11 on 17-7-21.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const imRoutes: Routes = [

  { path: 'a_r/im/index',  component: ChatComponent }
];

@NgModule({
  imports: [
    // 这里使用 forChild
    RouterModule.forChild(imRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ImRoutingModule { }
