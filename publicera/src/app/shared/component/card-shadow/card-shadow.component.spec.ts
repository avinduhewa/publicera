import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShadowComponent } from './card-shadow.component';

describe('CardShadowComponent', () => {
  let component: CardShadowComponent;
  let fixture: ComponentFixture<CardShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
