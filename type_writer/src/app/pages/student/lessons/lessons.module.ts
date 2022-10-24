import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LessonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
