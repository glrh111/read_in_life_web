import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 时间戳相关转换
import { UnixTimeComponent } from './unix-time/unix-time.component';

// routes
import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsListComponent } from './tools-list/tools-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ToolsRoutingModule
  ],
  declarations: [
    // app列表
    ToolsListComponent,

    // 每一个app
    UnixTimeComponent,
  ]
})
export class ToolsModule { }
