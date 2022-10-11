import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRaceComponent } from './type-race.component';

describe('TypeRaceComponent', () => {
  let component: TypeRaceComponent;
  let fixture: ComponentFixture<TypeRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
