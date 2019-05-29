import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { TwitterService } from 'ngx-twitter-api';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user;
  userType;
  selectedSocialMedia = 'twitter';
  twitterCredentials;

  constructor(
    private apiService: ApiService,
    private twitter: TwitterService,
    private afAuth: AngularFireAuth,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userService.getUser(this.user.email).subscribe(res => {
      this.user = res;
      localStorage.setItem('user', JSON.stringify(res));
      this.userType = localStorage.getItem('userType');
      console.log(this.userType);
      // this.getHomeTimeline();
    });
  }

  signIn() {
    if (this.selectedSocialMedia === 'twitter') {
      this.afAuth.auth.signOut().then(res => {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      })
        .then(res => {
          localStorage.setItem('twitter-login', JSON.stringify(res));
          this.twitterCredentials = res;
          this.apiService.postTweet(this.twitterCredentials).subscribe(res => {
            console.log('res', res);
          });
          // this.apiService.signInTwitter(this.twitterCredentials).subscribe(res => {
          //   console.log('qweqw', res);
          // });
          this.getData();
        });
    }
  }

  getData() {
    if (this.selectedSocialMedia === 'twitter') {
      const handlerUrl = this.getTwitterHandle();
      console.log(handlerUrl);
      // tslint:disable-next-line:max-line-length
      this.apiService.getTwitterProfileInfo(handlerUrl, this.twitterCredentials).subscribe(res => {
        console.log('sdasdas', res);
      });
    }
  }

  getTwitterHandle() {
    const url = this.user.socialMedia.twitter.split('/').reverse();
    console.log('url', url);
    return url[0];
  }

  getHomeTimeline() {

    this.twitter.get(
      '/1.1/statuses/home_timeline.json',
      {
        count: 5,
      },
      {
        consumerKey: 'QdQWrg3QCUGcTYT9wDwmmboDo',
        consumerSecret: '8yxpDl8KxE9vWgIXnBngMkjN28JZ9qL5XVjqdVPC3XgcOzLW7N',
      },
      {
        token: '175375380-x5dlyBASmBzUamZJInAIpMXCMzomChn3DzhRwN5Z',
        tokenSecret: 'oSF32XLLrJfbdaDBQrrwQnZwDTYHdUgGdFi8ilixaGZmM',
      },
    ).subscribe((res) => {
      console.log(res);
      // this.result = res.json().map(tweet => tweet.text);
    });
  }
}
