import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestsRoutingModule
  ]
})
export class TestsModule { }
