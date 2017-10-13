import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle4Component } from './card-style-4.component';

describe('CardStyle4Component', () => {
  let component: CardStyle4Component;
  let fixture: ComponentFixture<CardStyle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
