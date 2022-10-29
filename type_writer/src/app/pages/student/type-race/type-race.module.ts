import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRaceRoutingModule } from './type-race-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TypeRaceComponent } from './type-race.component';


@NgModule({
  declarations: [
    TypeRaceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TypeRaceRoutingModule
  ]
})
export class TypeRaceModule { }
