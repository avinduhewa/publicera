import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcleCardHorizontalComponent } from './artcle-card-horizontal.component';

describe('ArtcleCardHorizontalComponent', () => {
  let component: ArtcleCardHorizontalComponent;
  let fixture: ComponentFixture<ArtcleCardHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcleCardHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcleCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
