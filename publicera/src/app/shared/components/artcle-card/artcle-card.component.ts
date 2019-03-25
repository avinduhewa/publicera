import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artcle-card',
  templateUrl: './artcle-card.component.html',
  styleUrls: ['./artcle-card.component.scss']
})
export class ArtcleCardComponent implements OnInit {
  @Input() feed;

  constructor() { }

  ngOnInit() {
  }

  navigate() {
    window.open(this.feed.link, '_blank');
  }
}
