import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { ThemeModule } from '../@theme/theme.module';
import { TrendsComponent } from './trends/trends.component';
import { CmsComponent } from './cms/cms.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsCardFrontComponent } from './dashboard/profit-card/front-side/stats-card-front.component';
import { StatsAreaChartComponent } from './dashboard/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './dashboard/profit-card/front-side/stats-bar-animation-chart.component';
import { ProfitCardComponent } from './dashboard/profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from './dashboard/charts-panel/charts-panel.component';
import { ChartPanelHeaderComponent } from './dashboard/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './dashboard/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { OrdersChartComponent } from './dashboard/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './dashboard/charts-panel/charts/profit-chart.component';
import { StatsCardBackComponent } from './dashboard/profit-card/back-side/stats-card-back.component';
import { TrafficRevealCardComponent } from './dashboard/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarChartComponent } from './dashboard/traffic-reveal-card/back-side/traffic-bar-chart.component';
import { TrafficFrontCardComponent } from './dashboard/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBackCardComponent } from './dashboard/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarComponent } from './dashboard/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficCardsHeaderComponent } from './dashboard/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { CountryOrdersComponent } from './dashboard/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './dashboard/country-orders/map/country-orders-map.component';
import { CountryOrdersChartComponent } from './dashboard/country-orders/chart/country-orders-chart.component';
import { ECommerceVisitorsAnalyticsComponent } from './dashboard/visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './dashboard/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { ECommerceVisitorsStatisticsComponent } from './dashboard/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './dashboard/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './dashboard/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './dashboard/progress-section/progress-section.component';
import { SlideOutComponent } from './dashboard/slide-out/slide-out.component';
import { EarningCardComponent } from './dashboard/earning-card/earning-card.component';
import { EarningCardFrontComponent } from './dashboard/earning-card/front-side/earning-card-front.component';
import { EarningCardBackComponent } from './dashboard/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './dashboard/earning-card/back-side/earning-pie-chart.component';
import { EarningLiveUpdateChartComponent } from './dashboard/earning-card/front-side/earning-live-update-chart.component';
import { CountryOrdersMapService } from './dashboard/country-orders/map/country-orders-map.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FacebookComponent } from './cms/facebook/facebook.component';
import { TwitterComponent } from './cms/twitter/twitter.component';
import { InstagramComponent } from './cms/instagram/instagram.component';

@NgModule({
  declarations: [
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
    SecureComponent,
    TrendsComponent,
    CmsComponent,
    ProfessionalsComponent,
    GuidelinesComponent,
    DashboardComponent,
    FacebookComponent,
    TwitterComponent,
    InstagramComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    ThemeModule,
    SharedModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    PdfViewerModule,
  ],
  providers: [
    CountryOrdersMapService,
  ],
})

export class SecureModule { }
