import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMessagesComponent } from './x-messages.component';

describe('XMessagesComponent', () => {
  let component: XMessagesComponent;
  let fixture: ComponentFixture<XMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
