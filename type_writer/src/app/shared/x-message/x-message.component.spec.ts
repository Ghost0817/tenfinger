import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XMessageComponent } from './x-message.component';

describe('XMessageComponent', () => {
  let component: XMessageComponent;
  let fixture: ComponentFixture<XMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
