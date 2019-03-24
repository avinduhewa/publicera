import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnLayoutComponent } from './loginn-layout.component';

describe('LoginnLayoutComponent', () => {
  let component: LoginnLayoutComponent;
  let fixture: ComponentFixture<LoginnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
