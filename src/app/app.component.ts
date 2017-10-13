import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {
      title: 'Worlds best boss?',
      text: 'Michael Gary Scott is the worlds best boss. According to himself.',
      img: 'https://s3-eu-west-1.amazonaws.com/calyx-test-bucket/michael.jpg',
      cardType: 'cardStyle1'
    },
    {
      text: 'Always the padawan, never the jedi.',
      subtext: 'Dwight Schrute',
      cardType: 'cardStyle2'
    },
    {
      title: 'Just as hot as Jan, but in a different way',
      text: 'An entry from a personal diary from one Michael G. Scott',
      img: 'https://s3-eu-west-1.amazonaws.com/calyx-test-bucket/ryan.gif',
      cardType: 'cardStyle3'
    },
    {
      text: 'You miss 100% of shots you don\'t take. --Wayne Gretzky',
      subtext: 'Michael Scott',
      cardType: 'cardStyle4'
    },
    {
      title: 'YOLO',
      text: 'False, you live everyday. You only die once. YODO.',
      cardType: 'cardStyle5'
    },
    {
      img: 'https://s3-eu-west-1.amazonaws.com/calyx-test-bucket/creed.jpg',
      cardType: 'cardStyle6'
    }
  ];
}
