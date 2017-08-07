import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

import { Message } from '../service/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageList: Message[] = [
    new Message(1, '实例消息'),
  ];

  subMessage: string = '';

  ws: WebSocket;

  constructor() { }

  ngOnInit() {
    // 设置快捷键
    let that = this;
    document.onkeypress = function (e: KeyboardEvent) {
      if (13 == e.which) {
        that.sendMessage();
      }
    };


    console.log(this.messageList[0].content);
    // 连接ws服务
    this.ws = new WebSocket(environment.im_wss_url);

    this.ws.onmessage = function (message: MessageEvent) {
      console.log(message);
      that.messageList.push(
        new Message(2, message.data)
      );
    }
  }


  // 每次发消息自动滚动到下边
  scrollToBotton() {
    let objDiv = document.getElementsByClassName('im-chat-message-list')[0];
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  // 发送信息
  sendMessage() {
    this.ws.send(this.subMessage);

    this.subMessage = '';

    this.scrollToBotton();
  }


}
