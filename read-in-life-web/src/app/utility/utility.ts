/**
 * Created by glrh11 on 17-7-11.
 */

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Utility {
  // 解析res的相关信息
  static dealWithResponse (field: string): ((res: Response)=>any) {
    return function (res: Response) {
      let body = res.json();
      return body[field];
    }
  }

  static handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  static timestampToDatestr (timestamp: number): string {
    let date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    return "${year}-${month}-${day}"
  }

}
