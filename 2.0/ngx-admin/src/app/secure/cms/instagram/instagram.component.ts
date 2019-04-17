import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  keywordString = ''
  keywordArray: string[] = []

  writeUp = ''

  wordCombinations: string[] = [
    'Digital',
    'Digital Marketing',
    'Forensic Marketing',
    'Digital DeepDive'
  ]

  trendingHashTags: string[] = [
    'Something',
    'Idk',
    'Hello',
    'Help'
  ]


  constructor() { }

  ngOnInit() {
  }

  extractKeywords() {
    let tempString = ''
    this.keywordArray = this.keywordString.split(/[ ,]+/).join(',').split(',');
    this.keywordArray.forEach((elem, i) => {
      this.keywordArray[i] = elem.trim();
      if (this.keywordArray[i].length === 0 && i !== this.keywordArray.length) {
        this.keywordArray.splice(i, 1)
      } else {
        tempString += this.keywordArray[i] + ', '
      }
    })
    this.keywordString = tempString;
  }

  appendWord(word) {
    this.writeUp += ` ${word} `;
  }

}
