/**
 * Created by glrh11 on 17-7-21.
 */

export class CanvasImage {


  constructor(
    public backgroundColor: string, // 背景颜色
    public textColor: string, // 背景颜色

    public content: string, // 图像上显示的内容
    public times: number, // 文字重复几次
    public fontSize: number, // 文字大小

    public height: number, // 图像高度
    public width: number, //  图像宽度
    public ppi: number, //    分辨率
  ) {}
}
