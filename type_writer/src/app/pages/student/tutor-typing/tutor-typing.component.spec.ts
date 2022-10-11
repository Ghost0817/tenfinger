import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorTypingComponent } from './tutor-typing.component';

describe('TutorTypingComponent', () => {
  let component: TutorTypingComponent;
  let fixture: ComponentFixture<TutorTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorTypingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
