import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {

  @Input() items: any;

  constructor() {}
}
