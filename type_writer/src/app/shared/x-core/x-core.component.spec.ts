import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCoreComponent } from './x-core.component';

describe('XCoreComponent', () => {
  let component: XCoreComponent;
  let fixture: ComponentFixture<XCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
