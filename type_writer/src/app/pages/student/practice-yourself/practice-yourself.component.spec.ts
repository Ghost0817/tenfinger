import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeYourselfComponent } from './practice-yourself.component';

describe('PracticeYourselfComponent', () => {
  let component: PracticeYourselfComponent;
  let fixture: ComponentFixture<PracticeYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeYourselfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
