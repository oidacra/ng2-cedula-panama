import { AbstractControl, ValidatorFn } from '@angular/forms';

const CEDULA_REGEX = /^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/;
// @dynamic
export class CedulaValidators {
  static validator(control: AbstractControl): ValidatorFn {
    return (inputControl: AbstractControl): { [key: string]: any } | null => {
      const cedula: string = inputControl.value ? inputControl.value : '';

      if (inputControl.pristine) {
        return null;
      }

      const isValid: boolean = RegExp(CEDULA_REGEX).test(cedula);

      return !isValid ? { invalid: true } : null;
    };
  }
  static verificar(control: AbstractControl): any | null {
    return CedulaValidators.validator(control)(control);
  }
}
