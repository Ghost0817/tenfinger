import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XFormComponent } from './x-form.component';

describe('XFormComponent', () => {
  let component: XFormComponent;
  let fixture: ComponentFixture<XFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
