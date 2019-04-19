import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {
  pdf: string = '/v0/b/publicera-d0009.appspot.com/o/terms-and-conditions.pdf?alt=media';
  constructor() { }

  ngOnInit() {
  }

}
