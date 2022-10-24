import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HallOfFameRoutingModule } from './hall-of-fame-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HallOfFameComponent } from './hall-of-fame.component';


@NgModule({
  declarations: [
    HallOfFameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HallOfFameRoutingModule
  ]
})
export class HallOfFameModule { }
