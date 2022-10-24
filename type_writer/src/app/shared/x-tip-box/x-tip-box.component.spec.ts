import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XTipBoxComponent } from './x-tip-box.component';

describe('XTipBoxComponent', () => {
  let component: XTipBoxComponent;
  let fixture: ComponentFixture<XTipBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XTipBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XTipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
