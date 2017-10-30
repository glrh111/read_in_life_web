import { Component, OnInit, OnDestroy } from '@angular/core';
import { MineArray } from './mine-array';

// 处理时间的pipe
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({name: 'dealWithEscapedSecondPipe'})
export class DealWithEscapedSecondPipe implements PipeTransform {
  transform(value: number): string {
    return MineSweeperComponent.formatSecond(value);
  }
}


// 梳理游戏逻辑

// 小方块的几个状态
// 1. 初始状态 init 2. 右键标记状态 marked：标记为雷 3. 左键揭开内容状态：显示为雷或者数字

// 小方块的操作：
// 1. 左键揭开 detect_mine 2. 右键标记 mark_mine

// 整个雷阵
// 1. 初始状态：产生雷，小方块都处于揭开的状态
// 2. 每次左键揭开一个方块，1）判断是否为雷 2）判断雷是否已经标记完全，并做相应的提示。

@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.css']
})
export class MineSweeperComponent implements OnInit, OnDestroy {

  constructor() { }

  public mineArray: MineArray;
  public matchNotice: string = "进行中";
  public matchTimeSecond: number = 0;

  // 游戏开始的时间戳
  public startTimestamp: number;
  public timer;

  static formatSecond(secondAmount: number) {
    let second = secondAmount % 60;
    let minute = Math.round(secondAmount / 60);
    let hour = Math.round(minute / 60);
    minute = minute % 60;

    let timeStr = minute + ':' + second;
    if (hour > 0) {
      timeStr = hour + ':' + timeStr;
    }
    return timeStr;

  }

  ngOnInit() {
    document.body.style.background = '#35373f';
    this.mineArray = new MineArray();
    this.mineArray.init();
    // 1刷新一次
    this.startTimestamp = + new Date();
    let that = this;
    this.timer = setInterval(function () {
      that.matchTimeSecond = Math.round((+ new Date - that.startTimestamp) / 1000)
    }, 1000);
  }

  ngOnDestroy() {
    // 改变颜色
    document.body.style.background = '#fff';
  }

  // 左键点击
  onLeftClick(mineBox, event) {
    // 已经结束， 已经标记， 已经展开：点击左键无效
    if (mineBox.isFinished || mineBox.isMarked || mineBox.isKnown) {
      return
    }

    if (mineBox.isMine) {
      // 游戏结束
      this.mineArray.isFailed = true;
      // TODO 展开全部内容，弹出失败标识
      this.matchNotice = "失败";
      this.finish();
    } else {
      // 揭开这个，检查游戏是否胜利
      mineBox.isKnown = true;
      this.mineArray.displayedAmount += 1;
      if (this.mineArray.checkIfSuccess()) {
        this.matchNotice = "胜利";
        this.mineArray.isFailed = false;
        this.finish();
      }
    }
  }

  // 右键点击
  onRightClick(mineBox, event) {
    if (mineBox.isMarked) {
      console.log("我曹");
      mineBox.isMarked = false;
      // TODO FIX ME
      console.log(mineBox.isMarked, mineBox.isKnown);
    }

    // 标记一个雷, 或者
    mineBox.isMarked = true;

    // 检查是否获胜. 这里就不做检查了。只有一种获胜方式。


    return false;
  }

  disabledRightClick() {
    return false;
  }

  finish() {
    // 时间停止，全部显示出来
    window.clearInterval(this.timer);
    this.mineArray.isFinished = true;
    this.mineArray.displayAllMine();
  }

  reset() {
    this.ngOnInit();
  }


}
