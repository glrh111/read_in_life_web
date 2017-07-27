// canvas 参考:
// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial
// 如何结合angular4 使用?
// http://embed.plnkr.co/LFhOuepJrnPVlwUXmkUt/

import { Component, OnInit, ViewChild } from '@angular/core';

import { CanvasImage } from '../service/canvas_image';

@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrls: ['./generate-image.component.css']
})
export class GenerateImageComponent implements OnInit {

  canvasImage: CanvasImage = new CanvasImage(
    '#f0f', '#fff', 'ReadInLife', 1, 48, 240, 720, 72
  );

  @ViewChild("canvas") canvas;
  canvasContext: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
  }

  generateImage() {
    // 在canvas上绘图, 然后转换为png
    let canvas = this.canvas.nativeElement;
    canvas.width = this.canvasImage.width;
    canvas.height = this.canvasImage.height;
    this.canvasContext = canvas.getContext('2d');

    // 填充背景颜色
    this.canvasContext.fillStyle = this.canvasImage.backgroundColor;
    this.canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // 填充文字
    this.canvasContext.fillStyle = this.canvasImage.textColor;
    this.canvasContext.font = this.canvasImage.fontSize + "px sans-serif";
    this.canvasContext.textBaseline = "middle";
    this.canvasContext.textAlign = "center";
    // this.canvasContext.direction = "rtl"; //ltr, rtl, inherit 这个暂时不支持?
    this.canvasContext.fillText(
      this.canvasImage.content, this.canvasImage.width/2, this.canvasImage.height/2
    );


  }

  changeImageBackground(colorType: number=1) {
    let color: string;
    if (1==colorType) {
      color = this.canvasImage.backgroundColor;
    } else {
      color = this.canvasImage.textColor;
    }
    return { 'background-color': color };
  }

}
