import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XTableComponent } from './x-table/x-table.component';
import { XGridComponent } from './x-grid/x-grid.component';
import { XButtonComponent } from './x-button/x-button.component';
import { XCoreComponent } from './x-core/x-core.component';
import { XRegisterBoxComponent } from './x-register-box/x-register-box.component';
import { XSkillLevelComponent } from './x-skill-level/x-skill-level.component';
import { XTipBoxComponent } from './x-tip-box/x-tip-box.component';
import { XFormComponent } from './x-form/x-form.component';
import { XDialogComponent } from './x-dialog/x-dialog.component';
import { XHallOfFameComponent } from './x-hall-of-fame/x-hall-of-fame.component';
import { XMessageComponent } from './x-message/x-message.component';



@NgModule({
  declarations: [
    XTableComponent,
    XButtonComponent,
    XDialogComponent,
    XFormComponent,
    //XInputComponent,
    XMessageComponent,
    XRegisterBoxComponent,
    XSkillLevelComponent,
    //XFeedBackBoxComponent,
    XGridComponent,
    XCoreComponent,
    XHallOfFameComponent,
    //XSelectComponent,
    //XCheckboxComponent,
    //XRadioboxComponent,
    XTipBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    XTableComponent,
    XButtonComponent,
    XDialogComponent,
    XFormComponent,
    //XInputComponent,
    XMessageComponent,
    XRegisterBoxComponent,
    XSkillLevelComponent,
    //XFeedBackBoxComponent,
    XGridComponent,
    XCoreComponent,
    XHallOfFameComponent,
    //XSelectComponent,
    //XCheckboxComponent,
    //XRadioboxComponent,
    XTipBoxComponent
  ]
})
export class SharedModule { }
