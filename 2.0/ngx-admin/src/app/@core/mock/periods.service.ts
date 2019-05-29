import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  getYears() {
    return [
      '2010', '2011', '2012',
      '2013', '2014', '2015',
      '2016', '2017', '2018',
    ];
  }

  getMonths() {
    return [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
  }

  getWeeks() {
    let date = new Date();
    const _week = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];
    let week = [];
    let current_weekday = date.getDay() + 2;
    for (let i = 0;i < 7;i++) {
      if (current_weekday === 7) {
        current_weekday = 0;
      }
      week.push(_week[current_weekday]);
      current_weekday += 1;
    }
    return week;
  }

  getIndex(index) {
    const _week = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];
    const week = this.getWeeks();
    return week.indexOf(_week[index]);
  }
}
