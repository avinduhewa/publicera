import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../shared/services/feed.service';

@Component({
  selector: 'trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 2];
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

  navigate(url) {
    window.open(url, '_blank');
  }

}
