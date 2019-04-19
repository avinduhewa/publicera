import { Injectable } from '@angular/core';
import { Feed } from '../models/feed';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {

  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: HttpClient,
  ) { }

  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url);
  }
}
