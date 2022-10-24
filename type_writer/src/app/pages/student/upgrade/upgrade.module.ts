import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradeRoutingModule } from './upgrade-routing.module';
import { UpgradeComponent } from './upgrade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UpgradeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UpgradeRoutingModule
  ]
})
export class UpgradeModule { }
