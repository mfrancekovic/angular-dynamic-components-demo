import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-card-template-base',
  template: '',
})
export class CardTemplateBaseComponent {
  @Input() data: any;
}
