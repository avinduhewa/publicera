import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacebookService {

  constructor(
    private http: HttpClient,
  ) { }

  getFacebookAccessToken(): Observable<any> {
    return this.http.get(
      `/oauth/access_token?client_id=1233979890091351&client_secret=1c80b71b377433c0c5fe6bf00f457b06&grant_type=client_credentials`);
  }

  getPosts(pageName, accessToken): Observable<any> {
    return this.http.get(
      `/v2.9/${pageName}/posts?access_token=${accessToken}`);
  }
}
