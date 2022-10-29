import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkinsRoutingModule } from './skins-routing.module';
import { SkinsComponent } from './skins.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SkinsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkinsRoutingModule
  ]
})
export class SkinsModule { }
