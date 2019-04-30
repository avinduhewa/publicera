import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/shared/services/feed.service';

@Component({
  selector: 'app-keep-trends',
  templateUrl: './keep-trends.component.html',
  styleUrls: ['./keep-trends.component.scss']
})
export class KeepTrendsComponent implements OnInit {

  feedUrl = 'https://techmeme.com/feed.xml';
  feeds: any;

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
      .subscribe(
        (feed: any) => {
          console.log(feed.items);
          this.feeds = feed.items;
        },
        error => console.log(error));
  }
}
