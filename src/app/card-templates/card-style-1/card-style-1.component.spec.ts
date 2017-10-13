import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle1Component } from './card-style-1.component';

describe('CardStyle1Component', () => {
  let component: CardStyle1Component;
  let fixture: ComponentFixture<CardStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
