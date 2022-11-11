import { NgModule } from '@angular/core';
import { XRatingComponent } from './x-rating/x-rating.component';
import { XTableComponent } from './x-table/x-table.component';
import { XButtonComponent } from './x-button/x-button.component';
import { XDialogComponent } from './x-dialog/x-dialog.component';
import { XFormComponent, XRadioboxComponent, XSelectComponent, XTextareaComponent } from './x-form/x-form.component';
import { XMessagesComponent } from './x-messages/x-messages.component';
import { CommonModule } from '@angular/common';
import { XInputComponent } from './x-form/x-form.component';
import { XGridComponent } from './x-grid/x-grid.component';
import { XRegisterBoxComponent } from './x-register-box/x-register-box.component';
import { XSkillLevelComponent } from './x-skill-level/x-skill-level.component';
import { XFeedBackBoxComponent } from './x-feed-back-box/x-feed-back-box.component';
import { XHallOfFameComponent } from './x-hall-of-fame/x-hall-of-fame.component';
import { XCoreComponent, XFieldErrorsComponent } from './x-core/x-core.component';
import { XTipBoxComponent } from './x-tip-box/x-tip-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    XRatingComponent,
    XTableComponent,
    XButtonComponent,
    XDialogComponent,
    XFormComponent,
    XInputComponent,
    XTextareaComponent,
    XMessagesComponent,
    XFieldErrorsComponent,
    XGridComponent,
    XRegisterBoxComponent,
    XSkillLevelComponent,
    XFeedBackBoxComponent,
    XHallOfFameComponent,
    XCoreComponent,
    //XCheckboxComponent,
    XSelectComponent,
    XRadioboxComponent,
    XTipBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ],
  exports: [
      XRatingComponent,
      XTableComponent,
      XButtonComponent,
      XDialogComponent,
      XFormComponent,
      XInputComponent,
      XTextareaComponent,
      XMessagesComponent,
      XRegisterBoxComponent,
      XSkillLevelComponent,
      XFeedBackBoxComponent,
      XGridComponent,
      XCoreComponent,
      XHallOfFameComponent,
      XSelectComponent,
      //XCheckboxComponent,
      XRadioboxComponent,
      XTipBoxComponent
  ]
})
export class SharedModule { }
