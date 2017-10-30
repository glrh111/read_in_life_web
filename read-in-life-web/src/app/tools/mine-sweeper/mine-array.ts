import {every} from "rxjs/operator/every";
import {TypedRule} from "tslint/lib/language/rule/typedRule";
/**
 * Created by glrh11 on 17-10-30.
 */

class RandomNumberArray {
  // 生成一个随机数
  static generateARandomNumber(min: number, max: number) {
    // Returns a pseudorandom number between 0 and 1.
    return min + Math.round((max-min)*Math.random())
  }

  // 生成[min, max] 区间内，不重复的amount个随机数
  static generateRandomArray(min: number, max: number, amount: number) {
    let randomArray = new Set();
    while (randomArray.size<amount) {
      randomArray.add(
        this.generateARandomNumber(min, max)
      );
    }
    return randomArray;
  }
}


// 标识是否是雷
enum MineBoxContent {
  NOTMINE = 1,
  MINE
}

// 代表一个小方格
class MineBox {
  constructor(
    public isMine: boolean,                // 是否为雷
    public surroundedMineAmount: number=0, // 周围雷的数量
    public isKnown: boolean=false,         // 是否被揭开
    public isMarked: boolean=false,        // 是否被标记
  ) {}

  // 揭开这个方块: 检查状态
  detectMine() {
    this.isKnown = true;
  }

  // 标记一个为雷
  markMine() {
    this.isMarked = true;
  }

  // 撤销标记状态
  unMarkMine() {
    this.isMarked = false;
  }

}

// 代表地雷阵
export class MineArray {

  public mineArray: MineBox[][] = [];

  constructor(
    public mineAmount: number=10,          // 雷的总数量
    public displayedAmount: number=0,      // 已经挖开的方块的数量
    public width:      number=10,          // 雷阵的宽度
    public height:     number=10,          // 雷阵的高度
    public isFailed:   boolean=false,      // 是否已经输了
    public isFinished: boolean=false,      // 是否结束
  ) {}

  // 初始化雷阵 用一个二维矩阵表示
  init () {
    // 根据雷的数量，随机安置雷
    let max_index = this.height * this.width;
    let randomArray = RandomNumberArray.generateRandomArray(1, max_index, this.mineAmount);

    // console.log("randomArray", randomArray);

    // 1. 生成一系列随机数
    for (let i=1; i<=this.height; i++) {
      this.mineArray[i-1] = [];
      for (let j=1; j<=this.width; j++) {
        let index: number = (i-1) * this.height + j; // 取值 0 ~ 100
        let isMine: boolean = false;
        if (randomArray.has(index)) {
          isMine = true;
        }
        this.mineArray[i-1][j-1] = new MineBox(isMine);
      }
    }

    // 2. 再遍历一遍，获取每个方块周围雷的数量. 每个方块计算4个方向
    for (let i=1; i<=this.height; i++) {
      for (let j=1; j<=this.width; j++) {
        let calBoxArray = [[i-1, j], [i, j+1], [i+1, j], [i, j-1]];
        let surroundedMineAmount = 0;
        for (let [left, right] of calBoxArray) {
          if (1<=left && left<=this.height && 1<=right && right<=this.width) {
            surroundedMineAmount += this.mineArray[left-1][right-1].isMine ? 1 : 0;
          }
        }
        this.mineArray[i-1][j-1].surroundedMineAmount = surroundedMineAmount;
      }
    }

    // 3. 初始化完成

  }

  //

  // 展示所有的区域
  displayAllMine() {
    for (let i = 1; i <= this.height; i++) {
      for (let j = 1; j <= this.width; j++) {
        this.mineArray[i - 1][j - 1].isKnown = true;
      }
    }
  }

  // 检查是否获胜:
  checkIfSuccess() {
    return this.mineAmount == (this.width*this.height-this.displayedAmount)
  }

}


