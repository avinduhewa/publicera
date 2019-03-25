import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktoProComponent } from './talkto-pro.component';

describe('TalktoProComponent', () => {
  let component: TalktoProComponent;
  let fixture: ComponentFixture<TalktoProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalktoProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktoProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
