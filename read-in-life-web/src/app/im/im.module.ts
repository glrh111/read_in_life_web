import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChatComponent } from './chat/chat.component';

// 路由
import { ImRoutingModule } from './im-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ChatComponent]
})
export class ImModule { }
