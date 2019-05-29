import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { OutlineData, VisitorsAnalyticsData } from '../data/visitors-analytics';
import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class VisitorsAnalyticsService extends VisitorsAnalyticsData {

  constructor(
    private periodService: PeriodsService,
    private apiService: ApiService,
  ) {
    super();
  }

  private pieChartValue = 75;
  private innerLinePoints: number[] = [
    94, 188, 225, 244, 253, 254, 249, 235, 208,
    173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
    183, 224, 265, 302, 333, 358, 375, 388, 395,
    400, 400, 397, 390, 377, 360, 338, 310, 278,
    241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
  ];
  private outerLinePoints: number[] = [
    0, 0, 0, 0, 0, 0, 0,
  ];

  private generateOutlineLineData(param): OutlineData[] {
    this.getTwitterAnalytics(param);
    const months = this.periodService.getWeeks();
    const outerLinePointsLength = this.outerLinePoints.length;
    const monthsLength = months.length;

    return this.outerLinePoints.map((p, index) => {
      const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
        ? months[index]
        : '';

      return {
        label,
        value: p,
      };
    });
  }

  getInnerLineChartData(): Observable<number[]> {
    return observableOf(this.innerLinePoints);
  }

  getOutlineLineChartData(param): Observable<OutlineData[]> {
    return observableOf(this.generateOutlineLineData(param));
  }

  getPieChartData(): Observable<number> {
    return observableOf(this.pieChartValue);
  }

  getTwitterAnalytics(param) {
    const week = this.periodService.getWeeks();
    const currentDateObj = new Date();
    const currentDate = currentDateObj.getDate()
    param.statuses.forEach(item => {
      const date = new Date(item.created_at);
      const day = date.getDay();
      const index = this.periodService.getIndex(day);
      let addData = true;
      if (index === 5 && date.getDate() !== currentDate) addData = false;
      if (index === 6) addData = false;
      if (addData) {
        this.outerLinePoints[index] += 1;
      }
    });
  }
}
