import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { GamesListComponent } from './games-list/games-list.component';
import { TutorTypingComponent } from './tutor-typing/tutor-typing.component';
import { TestTypingComponent } from './test-typing/test-typing.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    StudentComponent,
    GamesListComponent,
    TutorTypingComponent,
    TestTypingComponent,
    HallOfFameComponent,
    ContactUsComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
