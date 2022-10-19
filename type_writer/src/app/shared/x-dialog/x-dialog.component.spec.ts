import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XDialogComponent } from './x-dialog.component';

describe('XDialogComponent', () => {
  let component: XDialogComponent;
  let fixture: ComponentFixture<XDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
