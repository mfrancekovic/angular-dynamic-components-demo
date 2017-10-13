import {Component, Input} from '@angular/core';
import {CardTemplateBase} from '../card-template-base';

@Component({
  selector: 'app-card-style-6',
  templateUrl: './card-style-6.component.html',
  styleUrls: ['./card-style-6.component.css']
})
export class CardStyle6Component implements CardTemplateBase {
  @Input() data: any;
}
