import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { checkUniquenessValidator } from "./checkUniquenessValidator";

@Directive({
  selector: "[validateUniqueness]",
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UniquenessValidator,
    multi: true
  }]
})

export class UniquenessValidator implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return checkUniquenessValidator()(control);
  }
}