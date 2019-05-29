import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-card-header>
        <span>User Activity</span>
        <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}">
            {{ type }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item"
                *ngFor="let t of types"
                (click)="getUserActivity(t); type = t">
              {{ t }}
            </li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body>
        <ul class="user-activity-list">
          <li *ngFor="let item of tweets">
            <div class="visited-date">
              {{ item.created_at |date}}
            </div>
            <div class="visited-pages-count" (click)="navigate(item)">
              <div class="title">Tweet Body</div>
              <div class="value">{{ item.text | slice:0:55 }}</div>
            </div>
            <div class="visited-percentages">
              <div class="title">Retweet Count,</div>
              <div class="delta value">
                {{ item.retweet_count }}
              </div>
            </div>
          </li>
        </ul>
      </nb-card-body>
    </nb-card>
  `,
})
export class ECommerceUserActivityComponent implements OnInit, OnDestroy {

  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;
  tweets = [];

  constructor(
    private themeService: NbThemeService,
    private userActivityService: UserActivityData,
    private apiService: ApiService,
  ) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });

    this.getUserActivity(this.type);
  }

  ngOnInit() {
    this.getTweets();
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getTweets() {
    this.apiService.getTwitterData().subscribe(res => {
      console.log('asdasdas', res);
      this.tweets = res.statuses;
    });
  }

  getTwitterHandle() {
    let user = JSON.parse(localStorage.getItem('user'));
    const url = user.socialMedia.twitter.split('/').reverse();
    console.log('url', url);
    return url[0];
  }

  navigate(tweet) {
    const handle = this.getTwitterHandle();
    window.open(`https://twitter.com/${handle}/status/${tweet.id_str}`, "_blank");
  }
}
