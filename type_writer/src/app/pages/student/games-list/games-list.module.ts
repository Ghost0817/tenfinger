import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesListRoutingModule } from './games-list-routing.module';
import { GamesListComponent } from './games-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GamesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GamesListRoutingModule
  ]
})
export class GamesListModule { }
