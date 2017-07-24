import { Component, OnInit } from '@angular/core';

import * as moment from "moment-timezone";
import {FormControl} from "@angular/forms";
// import * from "moment-timezone";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

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

  tzUpper: string = 'Asia/Shanghai';
  tzLower: string = 'Asia/Shanghai';

  // 过滤后的
  filteredTimezoneListUpper: any;
  filteredTimezoneListLower: any;

  // ctrl
  upperCtrl: FormControl;
  lowerCtrl: FormControl;

  // 时区列表
  timeZoneList: string[] = moment.tz.names();

  constructor() { }

  ngOnInit() {
    this.nowTimeStart();

    this.upperCtrl = new FormControl('Asia/Shanghai');
    this.filteredTimezoneListUpper = this.upperCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterTimezone(name));

    this.lowerCtrl = new FormControl('Asia/Shanghai');
    this.filteredTimezoneListLower = this.lowerCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterTimezone(name));
  }

  // 与时区过滤有关, 参考:
  // https://material.angular.io/components/autocomplete/examples
  filterTimezone(val: string) {
    return val ? this.timeZoneList.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.timeZoneList;
  }


  time13ToDatestr() {
    console.log(moment(this.time13Upper), this.tzUpper, this.tzLower);
    if (!this.time13Upper) {
      this.datestrUpper = '';
    } else {
      this.datestrUpper = moment.tz(parseInt(this.time13Upper), this.upperCtrl.value).format("YYYY/MM/DD HH:mm:ss.SSS");
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
    console.log(this.lowerCtrl.value, moment(dateStrList).tz(this.lowerCtrl.value));
    this.time13Lower = moment.tz(dateStrList, this.lowerCtrl.value).valueOf();
  }

  // 下面几个函数, 处理当前的实时时间戳
  nowTime13: number;
  nowTimer;

  addTimer() {
    //
    let that = this;
    this.nowTimer = setInterval(function () {
      that.nowTime13 = moment().valueOf();
    }, 500);
  }

  removeTimer() {
    window.clearInterval(this.nowTimer);
  }

  nowTimeStart() {
    this.removeTimer();
    this.addTimer();
  }

  nowTimeStop() {
    this.removeTimer();
  }

  nowTimeRefresh() {
    this.nowTime13 = moment().valueOf();
  }

}
