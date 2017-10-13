import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle6Component } from './card-style-6.component';

describe('CardStyle6Component', () => {
  let component: CardStyle6Component;
  let fixture: ComponentFixture<CardStyle6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
