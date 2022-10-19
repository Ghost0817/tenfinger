import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XGridComponent } from './x-grid.component';

describe('XGridComponent', () => {
  let component: XGridComponent;
  let fixture: ComponentFixture<XGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
