/**
 * Created by glrh11 on 17-7-21.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnixTimeComponent }    from './unix-time/unix-time.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { ParseJsonComponent } from './parse-json/parse-json.component';
import { Base64ToolComponent } from './base64-tool/base64-tool.component';
import { GenerateImageComponent } from './generate-image/generate-image.component';
import { MineSweeperComponent } from './mine-sweeper/mine-sweeper.component';

const toolsRoutes: Routes = [
  { path: 'a_r/tools/unix_time',  component: UnixTimeComponent },
  { path: 'a_r/tools/parse_json',  component: ParseJsonComponent },
  { path: 'a_r/tools/base64_tool',  component: Base64ToolComponent },
  { path: 'a_r/tools/generate_image',  component: GenerateImageComponent },
  { path: 'a_r/tools/mine_sweeper',  component: MineSweeperComponent },

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
