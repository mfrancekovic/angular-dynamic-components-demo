import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle2Component } from './card-style-2.component';

describe('CardStyle2Component', () => {
  let component: CardStyle2Component;
  let fixture: ComponentFixture<CardStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
