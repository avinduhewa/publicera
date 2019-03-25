import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepTrendsComponent } from './keep-trends.component';

describe('KeepTrendsComponent', () => {
  let component: KeepTrendsComponent;
  let fixture: ComponentFixture<KeepTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
