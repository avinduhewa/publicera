import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss'],
})
export class GuidelinesComponent implements OnInit {
  path = '../../../assets/docs/dm.pdf';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      console.log(res);
      const type = res.type;
      if (type === 'twitter-tips') {
        this.path = '../../../assets/docs/11.pdf';
      } else {
        this.path = '../../../assets/docs/dm.pdf';
      }
    })
  }

}
