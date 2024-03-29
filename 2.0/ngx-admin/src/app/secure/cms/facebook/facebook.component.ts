import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent implements OnInit {
  keywordString = '';
  keywordArray: string[] = [];

  writeUp = '';

  wordCombinations: string[] = [
  ];

  trendingHashTags: string[] = [
  ];


  constructor() { }

  ngOnInit() {
  }

  extractKeywords() {
    let tempString = '';
    this.keywordArray = this.keywordString.split(/[ ,]+/).join(',').split(',');
    this.keywordArray.forEach((elem, i) => {
      this.keywordArray[i] = elem.trim();
      if (this.keywordArray[i].length === 0 && i !== this.keywordArray.length) {
        this.keywordArray.splice(i, 1);
      } else {
        tempString += this.keywordArray[i] + ', ';
      }
    });
    this.keywordString = tempString;

    if (this.keywordString.toLowerCase().indexOf('digital') > -1 ||
      this.keywordString.toLowerCase().indexOf('marketing') > -1) {
      this.wordCombinations = [
        'Optimization', 'online', 'reach', 'beyond', 'worldly', 'motion'
      ];
      this.trendingHashTags = [
        'digitaltrends', 'SEO', 'Optimization', 'OnlineMarketing', 'reachbeyond'
      ];
    } else {
      this.wordCombinations = ['Word Combinations Not Found'], this.trendingHashTags = ['HashTags Not Found'];
    }
  }

  appendWord(word) {
    this.writeUp += ` ${word} `;
  }

}
