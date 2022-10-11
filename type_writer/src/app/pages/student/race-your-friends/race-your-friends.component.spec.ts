import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceYourFriendsComponent } from './race-your-friends.component';

describe('RaceYourFriendsComponent', () => {
  let component: RaceYourFriendsComponent;
  let fixture: ComponentFixture<RaceYourFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceYourFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceYourFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
