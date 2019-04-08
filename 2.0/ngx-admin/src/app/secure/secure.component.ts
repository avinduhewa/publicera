import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
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
    },
    {
      title: 'Connect Professionals',
      icon: 'nb-phone',
      link: '/app/professionals',
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
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
