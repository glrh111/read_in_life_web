import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialUiModule } from '../material-ui/material-ui.module';

// 时间戳相关转换
import { UnixTimeComponent } from './unix-time/unix-time.component';

// routes
import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { ParseJsonComponent } from './parse-json/parse-json.component';
import { Base64ToolComponent } from './base64-tool/base64-tool.component';
import { GenerateImageComponent } from './generate-image/generate-image.component';
import { MineSweeperComponent, DealWithEscapedSecondPipe } from './mine-sweeper/mine-sweeper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialUiModule,
    ReactiveFormsModule,

    ToolsRoutingModule
  ],
  declarations: [
    // app列表
    ToolsListComponent,

    // 每一个app
    UnixTimeComponent,

    ParseJsonComponent,

    Base64ToolComponent,

    GenerateImageComponent,

    MineSweeperComponent,

    DealWithEscapedSecondPipe,

  ],
  exports: [
    DealWithEscapedSecondPipe,
  ]
})
export class ToolsModule { }
