import {Component, Input} from '@angular/core';
import {CardTemplateBase} from '../card-template-base';

@Component({
  selector: 'app-card-style-2',
  templateUrl: './card-style-2.component.html',
  styleUrls: ['./card-style-2.component.css']
})
export class CardStyle2Component implements CardTemplateBase {
  @Input() data: any;
}
