import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static password({ value }: AbstractControl): ValidationErrors | null {
    const isContainNumber = /\d/gm.test(value);
    const isContainUppercase = /[A-Z]/gm.test(value);
    const isContainLowercase = /[a-z]/gm.test(value);
    const valid = isContainNumber && isContainUppercase && isContainLowercase;

    return valid || value === '' ? null : { password: { valid: false, value } };
  }
}
