import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/shared/services/feed.service';

@Component({
  selector: 'app-keep-trends',
  templateUrl: './keep-trends.component.html',
  styleUrls: ['./keep-trends.component.scss']
})
export class KeepTrendsComponent implements OnInit {

<<<<<<< HEAD
  private feedUrl = 'https://techmeme.com/feed.xml';
  private feeds: any;
=======
  feedUrl = 'https://techmeme.com/feed.xml';
  feeds: any;
>>>>>>> c84d48f5913887b35c08e193da2a4a0bc5a1f08a

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
