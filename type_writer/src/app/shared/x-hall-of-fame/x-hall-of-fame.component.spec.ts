import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XHallOfFameComponent } from './x-hall-of-fame.component';

describe('XHallOfFameComponent', () => {
  let component: XHallOfFameComponent;
  let fixture: ComponentFixture<XHallOfFameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XHallOfFameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XHallOfFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
