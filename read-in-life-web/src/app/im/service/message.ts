/**
 * Created by glrh11 on 17-8-7.
 */

import { User } from '../../service/user';

export class Message {
  constructor(
    public message_id: number,

    public from_id: number,
    public to_id: number,
    public content: string,

    public ctime: number
  ) { }

}

export enum MessageTypeModel {

  PING = 1001, // 服务端发出的ping消息
  PONG = 1002, // 客户端回应的pong消息

  // 一般的文本消息
  CLIENT_TO_CLIENT = 2001, // c 2 c
  CLIENT_TO_ALL = 2002,    // c 2 all
  IM_TO_CLIENT_EVER = 2003, // 历史消息

  // 确认消息: 客户端发送给im的
  CONFIRM_TEXT_MESSAGE = 3001,

  // 上线, 下线消息
  CLIENT_ONLINE = 4001,
  CLIENT_OFFLINE = 4002,
}
