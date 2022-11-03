import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorTypingRoutingModule } from './tutor-typing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TutorTypingComponent } from './tutor-typing.component';


@NgModule({
  declarations: [
    TutorTypingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TutorTypingRoutingModule
  ]
})
export class TutorTypingModule { }
