import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CardTemplateBase} from './card-templates/card-template-base';
import {CardStyle1Component} from './card-templates/card-style-1/card-style-1.component';
import {CardStyle2Component} from './card-templates/card-style-2/card-style-2.component';
import {CardStyle3Component} from './card-templates/card-style-3/card-style-3.component';
import {CardStyle4Component} from './card-templates/card-style-4/card-style-4.component';
import {CardStyle5Component} from './card-templates/card-style-5/card-style-5.component';
import {CardStyle6Component} from './card-templates/card-style-6/card-style-6.component';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html'
})
export class GridItemComponent implements OnInit {

  @Input() data: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;
  readonly templateMapper = {
    cardStyle1: CardStyle1Component,
    cardStyle2: CardStyle2Component,
    cardStyle3: CardStyle3Component,
    cardStyle4: CardStyle4Component,
    cardStyle5: CardStyle5Component,
    cardStyle6: CardStyle6Component
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForCardType(this.data.cardType));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CardTemplateBase>componentRef.instance).data = this.data;
  }
  private getComponentForCardType(cardType) {
    return this.templateMapper[cardType];
  }

}
