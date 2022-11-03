import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTypingRoutingModule } from './test-typing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestTypingComponent } from './test-typing.component';


@NgModule({
  declarations: [
    TestTypingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TestTypingRoutingModule
  ]
})
export class TestTypingModule { }
