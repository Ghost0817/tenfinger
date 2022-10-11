import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTypingRaceComponent } from './enter-typing-race.component';

describe('EnterTypingRaceComponent', () => {
  let component: EnterTypingRaceComponent;
  let fixture: ComponentFixture<EnterTypingRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterTypingRaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterTypingRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
