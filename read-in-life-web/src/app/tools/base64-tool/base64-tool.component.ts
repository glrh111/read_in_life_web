import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64-tool',
  templateUrl: './base64-tool.component.html',
  styleUrls: ['./base64-tool.component.css']
})
export class Base64ToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rawString: string = '';
  resultString: string = '';

  // 清除两个框框中的字符串
  clearString() {
    this.rawString = '';
    this.resultString = '';
  }

  // 下面两个函数参考
  // https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22
  b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(+('0x' + p1));
    }))
  }

  b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  // 编码
  encodeString() {
    this.resultString = this.b64EncodeUnicode(this.rawString);
  }

  // 解码
  decodeString() {
    this.resultString = this.b64DecodeUnicode(this.rawString);
  }

  // 图片相关的东西 *******************************
  resultImageString: string = '';

  encodeImage() {

    let ele = document.getElementById('beingEncodeImage');
    let that = this;

    if (ele['files'] && ele['files'][0]) {

      let FR= new FileReader();

      FR.addEventListener("load", function(e) {
        // document.getElementById("img").src       = e.target.result;
        let target = e.target || e.srcElement || e.currentTarget;
        console.log(e);
        that.resultImageString = target['result'];
      });

      FR.readAsDataURL( ele['files'][0] );
    }



  }

  clearImageString() {
    this.resultImageString = '';
  }


}
