import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XFeedBackBoxComponent } from './x-feed-back-box.component';

describe('XFeedBackBoxComponent', () => {
  let component: XFeedBackBoxComponent;
  let fixture: ComponentFixture<XFeedBackBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XFeedBackBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XFeedBackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
