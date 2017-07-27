import { Component, OnInit } from '@angular/core';

import { Tool } from '../service/tool';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.css']
})
export class ToolsListComponent implements OnInit {

  tools_list: Tool[];

  constructor() {
    this.tools_list = [
      new Tool(
        '/a_r/tools/unix_time',
        'http://o9hjg7h8u.bkt.clouddn.com/pic_coin_time.png',
        '时间戳转换'
      ),
      new Tool(
        '/a_r/tools/parse_json',
        'http://o9hjg7h8u.bkt.clouddn.com/pic_coin_json.png',
        'JSON格式化'
      ),
      new Tool(
        '/a_r/tools/base64_tool',
        'http://o9hjg7h8u.bkt.clouddn.com/pic_coin_b64.png',
        'base64工具'
      ),
      new Tool(
        '/a_r/tools/generate_image',
        'http://o9hjg7h8u.bkt.clouddn.com/pic_coin_tu.png',
        '图片生成'
      ),
    ];
  }

  ngOnInit() {
  }

}
