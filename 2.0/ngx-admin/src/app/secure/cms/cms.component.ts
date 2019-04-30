import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss'],
})
export class CmsComponent implements OnInit {
  private allowedTypes = ['facebook', 'twitter', 'instagram'];
  type: string = 'facebook';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.allowedTypes.indexOf(params.type) !== -1) {
        this.type = params.type;
      } else {
        this.router.navigate(['/app/cms', 'facebook']);
      }

    });
  }

}
