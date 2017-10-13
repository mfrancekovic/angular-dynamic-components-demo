import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyle5Component } from './card-style-5.component';

describe('CardStyle5Component', () => {
  let component: CardStyle5Component;
  let fixture: ComponentFixture<CardStyle5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStyle5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStyle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
