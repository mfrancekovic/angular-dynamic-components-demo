import {Component, Input} from '@angular/core';
import {CardTemplateBase} from '../card-template-base';

@Component({
  selector: 'app-card-style-5',
  templateUrl: './card-style-5.component.html',
  styleUrls: ['./card-style-5.component.css']
})
export class CardStyle5Component implements CardTemplateBase {
  @Input() data: any;
}
