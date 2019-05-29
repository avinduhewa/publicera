import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getTwitterProfileInfo(twitterLink, twitter): Observable<any> {
    console.log('twitter', twitter);
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${twitter.user.ra}`),
    };
    console.log('here', header);
    return this.http.get(`/1.1/users/show.json?screen_name=${twitterLink}`, header);
  }

  postTweet(twitter): Observable<any> {
    console.log('twitter', twitter);
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${twitter.user.ra}`),
    };
    console.log('here', header);
    return this.http.post(`/1.1/statuses/update.json`, { status: 'Hello world' }, header);
  }

  signInTwitter(twitter): Observable<any> {
    const token = twitter.credential.accessToken;
    const secret = twitter.credential.secret;
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${btoa(`${token}:${secret}`)}`)
        .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8'),
    };
    return this.http.post('/twitter/oauth2/token', 'grant_type=client_credentials'
      // {
      //   grant_type: 'client_credentials',
      //   // grant_type: {
      //   //   user: 'QdQWrg3QCUGcTYT9wDwmmboDo',
      //   //   pass: '8yxpDl8KxE9vWgIXnBngMkjN28JZ9qL5XVjqdVPC3XgcOzLW7N',
      //   // },
      // }
      , header);
  }

  getTwitterHandle() {
    const user = JSON.parse(localStorage.getItem('user'));
    const twitterHandle = user.socialMedia.twitter;
    return twitterHandle.split('/').reverse()[0];
  }


  getTwitterData(): Observable<any> {
    const id = this.getTwitterHandle();
    return this.http.get(`/twitter-local/mytweets/${id}`);
  }

  getTwitterUserData(): Observable<any> {
    const id = this.getTwitterHandle();
    return this.http.get(`/twitter-local/stats/${id}`);
  }
}
