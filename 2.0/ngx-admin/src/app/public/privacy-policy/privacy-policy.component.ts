import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  pdf: string = '/v0/b/publicera-d0009.appspot.com/o/Privacy%20Policy.pdf?alt=media';
  constructor() { }

  ngOnInit() {
  }

}
