import { Injectable } from '@angular/core';
import { Feed } from '../models/feed';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {

  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: HttpClient
  ) { }

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url);
  }

  private extractFeeds(res: Response): Feed {
    const feed = res.json();
    return feed || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
