import { Attribute, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

type MyButton = 'submit' | 'button';

@Component({
  selector: 'x-button',
  templateUrl: './x-button.component.html',
  styleUrls: ['./x-button.component.scss']
})
export class XButtonComponent {

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public type!: MyButton;

  @Input()
  public text!: String;

  constructor(
    //@Attribute('type') public type: MyButton,
    //@Attribute('text') public text: String,
    //@Attribute('type') public parentForm: FormGroup,
  ) {
    console.log(this.text);
    console.log((this.text == '' || this.text == null));
    if (this.text === '' || this.text === null) {
      this.text = 'Button';
    }
   }

   

}
