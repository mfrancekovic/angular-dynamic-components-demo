import {Component, Input} from '@angular/core';
import {CardTemplateBase} from '../card-template-base';

@Component({
  selector: 'app-card-style-3',
  templateUrl: './card-style-3.component.html',
  styleUrls: ['./card-style-3.component.css']
})
export class CardStyle3Component implements CardTemplateBase {

  @Input()data: any;

}
