import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GridComponent} from './grid.component';
import {GridItemComponent} from './grid-item.component';
import { CardStyle1Component } from './card-templates/card-style-1/card-style-1.component';
import { CardStyle2Component } from './card-templates/card-style-2/card-style-2.component';
import { CardStyle3Component } from './card-templates/card-style-3/card-style-3.component';
import { CardStyle4Component } from './card-templates/card-style-4/card-style-4.component';
import { CardStyle5Component } from './card-templates/card-style-5/card-style-5.component';
import { CardStyle6Component } from './card-templates/card-style-6/card-style-6.component';
import {CardTemplateBaseComponent} from './card-templates/card-template-base';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridItemComponent,
    CardTemplateBaseComponent,
    CardStyle1Component,
    CardStyle2Component,
    CardStyle3Component,
    CardStyle4Component,
    CardStyle5Component,
    CardStyle6Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CardStyle1Component, CardStyle2Component, CardStyle3Component, CardStyle4Component, CardStyle5Component, CardStyle6Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
