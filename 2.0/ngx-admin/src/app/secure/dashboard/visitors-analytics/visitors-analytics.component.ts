import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { OutlineData, VisitorsAnalyticsData } from '../../../@core/data/visitors-analytics';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';


@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy, OnInit {
  loading = true;
  private alive = true;

  pieChartValue: number;
  chartLegend: { iconColor: string; title: string }[];
  visitorsAnalyticsData: { outerLine: OutlineData[]; };
  twitterUser;

  constructor(
    private themeService: NbThemeService,
    private visitorsAnalyticsChartService: VisitorsAnalyticsData,
    private apiService: ApiService,
  ) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });
  }

  ngOnInit() {
    this.loading = true;
    forkJoin(
      this.apiService.getTwitterData(),
      this.apiService.getTwitterUserData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([twitterData, twitterUser]) => {
        console.log('asdsda', twitterData);
        console.log('asdasdsd', twitterUser);
        this.twitterUser = twitterUser;
        forkJoin(
          this.visitorsAnalyticsChartService.getOutlineLineChartData(twitterData),
          this.visitorsAnalyticsChartService.getPieChartData(),
        )
          .pipe(takeWhile(() => this.alive))
          .subscribe(([outerLine, pieChartValue]: [OutlineData[], number]) => {
            this.loading = false;
            this.visitorsAnalyticsData = {
              outerLine: outerLine,
            };
            this.pieChartValue = pieChartValue;
          });
      });
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'Tweet Count',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
