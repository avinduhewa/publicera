import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-secure-component',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent implements OnInit {
  menu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      link: '/app/dashboard',
      home: true,
    },
    {
      title: 'Profile',
      icon: 'nb-home',
      link: '/app/dashboard',
      home: true,
      hidden: true,
    },
    {
      title: 'My Earnings',
      icon: 'nb-bar-chart',
      link: '/app/dashboard',
      hidden: true,
    },
    {
      title: 'FEATURES',
      group: true,
    },
    {
      title: 'Trends',
      icon: 'nb-bar-chart',
      children: [
        {
          title: 'Latest',
          link: '/app/trends/latest',
        },
        {
          title: 'Most Popular',
          link: '/app/trends/popular',
        },
      ],
      hidden: false,
      expanded: true,
    },
    {
      title: 'Content Management',
      icon: 'nb-tables',
      children: [
        {
          title: 'Facebook',
          link: '/app/cms/facebook',
        },
        {
          title: 'Instagram',
          link: '/app/cms/instagram',
        },
        {
          title: 'Twitter',
          link: '/app/cms/twitter',
        },
      ],
      hidden: false,
      expanded: true,
    },
    {
      title: 'Connect Professionals',
      icon: 'nb-phone',
      link: '/app/professionals',
      hidden: false,
    },
    {
      title: 'Guidelines',
      icon: 'nb-lightbulb',
      children: [
        {
          title: 'Digital Marketing',
          link: '/app/guidelines/digitalMarketing',
        },
        {
          title: 'Business Development',
          link: '/app/guidelines/businessDevelopment',
        },
        {
          title: 'Strategic Thinking',
          link: '/app/guidelines/strategicThinking',
        },
        {
          title: 'Product Development',
          link: '/app/guidelines/productDevelopment',
        },
      ],
      expanded: true,
    },
    {
      title: 'Settings',
      group: true,
    },
    {
      title: 'Upgrade',
      icon: 'nb-arrow-up',
      link: '/app/upgrade',
      hidden: false,
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    const userType = localStorage.getItem('userType');
    if (userType === 'silver') {
      // this.menu[4].hidden = true;
      // this.menu[5].hidden = true;
      this.menu[4].icon = 'nb-locked';
      this.menu[4].children = null;
      this.menu[4].url = '/app/upgrade';
      this.menu[5].icon = 'nb-locked';
      this.menu[5].children = null;
      this.menu[5].url = '/app/upgrade';
    }
    if (userType === 'gold') {
      this.menu[5].icon = 'nb-locked';
      this.menu[5].children = null;
      this.menu[5].url = '/app/upgrade';
    }

    if (userType === 'freelancer') {
      this.menu[0].hidden = true;
      this.menu[1].hidden = false;
      this.menu[2].hidden = false;
      this.menu[4].hidden = true;
      this.menu[5].hidden = true;
      this.menu[7].hidden = true;
    }

    if (!localStorage.getItem('user')) {
      this.router.navigateByUrl('/');
    }
  }

}
