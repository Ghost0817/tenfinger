import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRatingComponent } from './x-rating.component';

describe('XRatingComponent', () => {
  let component: XRatingComponent;
  let fixture: ComponentFixture<XRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
