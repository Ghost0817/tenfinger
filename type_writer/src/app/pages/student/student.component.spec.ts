import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserService } from 'src/app/core/services/user.service';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;


  let componentUserService: UserService; // the actually injected service
  let userService: UserService; // the TestBed injected service
  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message
  let userServiceStub: {
    isLoggedIn: boolean;
    user: { name: string}
  };

  beforeEach(async () => {

    // stub UserService for test purposes
    // #docregion user-service-stub
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User' },
    };

    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [ { provide: UserService, useValue: userServiceStub } ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;


   // #docregion injected-service
    // UserService actually injected into the component
    userService = fixture.debugElement.injector.get(UserService);
    // #enddocregion injected-service
    componentUserService = userService;
    // #docregion setup
    // #docregion inject-from-testbed
    // UserService from the root injector
    userService = TestBed.get(UserService);
    // #enddocregion inject-from-testbed

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content)
      .withContext('"Welcome ..."')
      .toContain('Welcome');
    expect(content)
      .withContext('expected name')
      .toContain('Test User');
  });
  
  it('should welcome "Bubba"', () => {
    userServiceStub.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });
  
  it('should request login if not logged in', () => {
    userServiceStub.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content)
      .withContext('not welcomed')
      .not.toContain('Welcome');
    expect(content)
      .withContext('"log in"')
      .toMatch(/log in/i);
  });
});
