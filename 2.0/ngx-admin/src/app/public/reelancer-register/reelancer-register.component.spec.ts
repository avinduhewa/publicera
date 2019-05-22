import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelancerRegisterComponent } from './reelancer-register.component';

describe('ReelancerRegisterComponent', () => {
  let component: ReelancerRegisterComponent;
  let fixture: ComponentFixture<ReelancerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelancerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelancerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
