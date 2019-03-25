import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcleCardComponent } from './artcle-card.component';

describe('ArtcleCardComponent', () => {
  let component: ArtcleCardComponent;
  let fixture: ComponentFixture<ArtcleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
