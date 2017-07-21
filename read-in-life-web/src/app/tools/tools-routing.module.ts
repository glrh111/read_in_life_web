/**
 * Created by glrh11 on 17-7-21.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnixTimeComponent }    from './unix-time/unix-time.component';
import { ToolsListComponent } from './tools-list/tools-list.component';

const toolsRoutes: Routes = [
  { path: 'a_r/tools/unix_time',  component: UnixTimeComponent },

  { path: 'a_r/tools/tools_list',  component: ToolsListComponent }
];

@NgModule({
  imports: [
    // 这里使用 forChild
    RouterModule.forChild(toolsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToolsRoutingModule { }
