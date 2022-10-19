import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSkillLevelComponent } from './x-skill-level.component';

describe('XSkillLevelComponent', () => {
  let component: XSkillLevelComponent;
  let fixture: ComponentFixture<XSkillLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XSkillLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XSkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
