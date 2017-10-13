import {Component, Input} from '@angular/core';
import {CardTemplateBase} from '../card-template-base';

@Component({
  selector: 'app-card-style-4',
  templateUrl: './card-style-4.component.html',
  styleUrls: ['./card-style-4.component.css']
})
export class CardStyle4Component implements CardTemplateBase {
  @Input() data: any;
}
