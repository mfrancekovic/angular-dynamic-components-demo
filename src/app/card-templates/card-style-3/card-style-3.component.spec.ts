import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle3Component } from './card-style-3.component';

describe('CardStyle3Component', () => {
  let component: CardStyle3Component;
  let fixture: ComponentFixture<CardStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
