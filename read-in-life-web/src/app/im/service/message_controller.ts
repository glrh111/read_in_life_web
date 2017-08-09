/**
 * Created by glrh11 on 17-8-9.
 */

import { MessageTypeModel, Message } from './message';
import { webSocket } from "rxjs/observable/dom/webSocket";

import { UserService } from '../../service/user.service';
import {forEach} from "@angular/router/src/utils/collection";
import {reverse} from "dns";

export class MessageController {

  public static wocao(ws: WebSocket) {

  }

  // 供设置ws回调函数使用
  public static messageHandler(that) {
    // 代表本类
    return function (message) {
      console.log(that, message);
      // json 解码
      let decode_message = message;

      // 判断 message_type
      let message_type = decode_message['message_type'];
      let message_content = decode_message['message_content'];

      switch (message_type) {
        case MessageTypeModel.PING:
          that.wsSubject.next(JSON.stringify({
            'message_type': MessageTypeModel.PONG,
            'message_content': 'pong'
          }));
          break;
        // 发送给本客户端的消息
        case MessageTypeModel.CLIENT_TO_ALL:

          // if (that.myself.user_id == message_content.from_id) {
          //   console.log('that.myself.user_id', that.myself.user_id, 'message_content.from_id', message_content.from_id);
          //   return;
          // }

          that.messageList.push(
            new Message(
              message_content.message_id,
              message_content.from_id,
              message_content.to_id,

              message_content.content,
              message_content.ctime
            ));
          break;
        // c to c 消息, 以后做
        case MessageTypeModel.CLIENT_TO_CLIENT:

          break;

        // 历史消息
        case MessageTypeModel.IM_TO_CLIENT_EVER:
          message_content.forEach(function (everyMessage) {
            console.log(everyMessage);
            that.messageList.unshift(
              new Message(
                parseInt(everyMessage.message_id),
                parseInt(everyMessage.from_id),
                parseInt(everyMessage.to_id),

                everyMessage.content,
                parseInt(everyMessage.ctime)
              ));
          });

          break;

      }
    }


  }

}
