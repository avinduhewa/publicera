import { Component, OnInit } from '@angular/core';
declare var Skype;

@Component({
  selector: 'ngx-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss'],
})
export class ProfessionalsComponent implements OnInit {
  currentFreelancer = 'echo123';

  constructor() { }

  ngOnInit() {

  }

  setFreelancer(type) {
    this.currentFreelancer = type;
  }

  call() {
    window.open('https://grv.to/@avinduhewa', '_blank');
  }

}
