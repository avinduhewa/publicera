import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FacebookService } from 'src/app/shared/services/facebook.service';
>>>>>>> c84d48f5913887b35c08e193da2a4a0bc5a1f08a

@Component({
  selector: 'app-social-media-management',
  templateUrl: './social-media-management.component.html',
  styleUrls: ['./social-media-management.component.scss']
})
export class SocialMediaManagementComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
  }

=======
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
>>>>>>> c84d48f5913887b35c08e193da2a4a0bc5a1f08a
}
