// 参考rxjs官网:
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-webSocket

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Message, MessageTypeModel } from '../service/message';
import { MessageController } from '../service/message_controller';
import { UserService } from '../../service/user.service';
import { User } from '../../service/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userInfoList$: {[key:number]: User} = {};

  // 获取我的信息
  myself: User;

  // 连接提示
  connectMessage: string = '未登录, 未连接';

  messageList: Message[] = [

  ];

  subMessage: string = '';

  wsSubject;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    // 设置快捷键
    let that = this;
    document.onkeypress = function (e: KeyboardEvent) {
      if (13 == e.which) {
        that.sendMessage();
      }
    };

    // 获取我的信息之后, 再连接.
    this.userService.getMyself().subscribe(
      function (data) {
        that.myself = data;
        if (that.myself) {
          that.connectWs();
          that.connectMessage = '已经连接';
        }

      },
      error => console.log(error)
    );
  }

  connectWs() {
    let that = this;
    this.wsSubject = Observable.webSocket(environment.im_wss_url);
    this.wsSubject.subscribe(
      MessageController.messageHandler(that),
      (err) => console.log('wocao', err),
      () => console.log('complete')
    );
  }

  // 每次发消息自动滚动到下边
  scrollToBottom() {
    let objDiv = document.getElementsByClassName('im-chat-message-list')[0];
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  // 发送信息
  sendMessage() {
    let that = this;
    this.wsSubject.next(JSON.stringify({
      'message_type': MessageTypeModel.CLIENT_TO_ALL,
      'message_content': {
        'from_id': this.myself.user_id,
        'content': that.subMessage
      }
    }));

    this.subMessage = '';

    this.scrollToBottom();
  }


}
