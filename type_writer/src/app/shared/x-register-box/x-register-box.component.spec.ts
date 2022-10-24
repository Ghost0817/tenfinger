import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XRegisterBoxComponent } from './x-register-box.component';

describe('XRegisterBoxComponent', () => {
  let component: XRegisterBoxComponent;
  let fixture: ComponentFixture<XRegisterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XRegisterBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XRegisterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
