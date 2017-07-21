import { Component, OnInit } from '@angular/core';

import * as moment from "moment-timezone";
// import * from "moment-timezone";

@Component({
  selector: 'app-unix-time',
  templateUrl: './unix-time.component.html',
  styleUrls: ['./unix-time.component.css']
})
export class UnixTimeComponent implements OnInit {

  formatString: string = "";

  time13Upper: string;
  time13Lower: string;

  datestrUpper: string;
  datestrLower: string;

  constructor() { }

  ngOnInit() {
  }

  time13ToDatestr() {
    console.log(moment(this.time13Upper));
    if (!this.time13Upper) {
      this.datestrUpper = '';
    } else {
      this.datestrUpper = moment(parseInt(this.time13Upper)).tz("Asia/Shanghai").format("YYYY/MM/DD HH:mm:ss.SSS");
    }
  }

  dateFieldList: string[] = [
    'year', 'month', 'day', 'hour', 'minute', 'second'
  ];
  dateFieldListMeaning: string[] = [
    '年', '月', '日', '时', '分', '秒'
  ];

  datestrToTime13() {

    let dateStrList: number[] = []; // 里边6个元素, 年月日时分秒

    this.dateFieldList.forEach(function (field, index) {
      let data = parseInt(document.getElementById(field).textContent || "1");
      if (isNaN(data)) {
        if (index<=2) {
          data = 1;
        } else {
          data = 0;
        }
      }
      if ('month'==field) {
        data--;
      }
      dateStrList.push(data);
    });
    dateStrList.push(0);
    this.time13Lower = moment(dateStrList).tz("Asia/Shanghai").valueOf();
  }

}
