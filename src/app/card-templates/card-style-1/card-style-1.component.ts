import {Component, Input} from '@angular/core';
import {CardTemplateBase} from '../card-template-base';

@Component({
  selector: 'app-card-style-1',
  templateUrl: './card-style-1.component.html',
  styleUrls: ['./card-style-1.component.css']
})
export class CardStyle1Component implements CardTemplateBase {
  @Input() data: any;
}
