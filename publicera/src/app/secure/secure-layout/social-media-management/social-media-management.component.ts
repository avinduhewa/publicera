import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'src/app/shared/services/facebook.service';

@Component({
  selector: 'app-social-media-management',
  templateUrl: './social-media-management.component.html',
  styleUrls: ['./social-media-management.component.scss']
})
export class SocialMediaManagementComponent implements OnInit {
  accessToken: any;

  constructor(
    private fbService: FacebookService,
  ) { }

  ngOnInit() {
    this.getAccessToken();
  }

  getAccessToken() {
    this.fbService.getFacebookAccessToken().subscribe(accessToken => {
      console.log('Access Token', accessToken);
      this.accessToken = accessToken;
      this.getPosts();
    });
  }

  getPosts() {
    this.fbService.getPosts('LADbible', this.accessToken.access_token).subscribe(res => {
      console.log('Response', res);
    });
  }
}
