import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artcle-card-horizontal',
  templateUrl: './artcle-card-horizontal.component.html',
  styleUrls: ['./artcle-card-horizontal.component.scss']
})
export class ArtcleCardHorizontalComponent implements OnInit {
  @Input() feed;
  constructor() { }

  ngOnInit() {
  }

}
