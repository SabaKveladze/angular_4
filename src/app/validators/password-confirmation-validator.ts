import { AbstractControl } from '@angular/forms';

export const passwordConfirmationValidator = (control: AbstractControl) => {
  let password = control?.get('password');
  let confirmpass = control?.get('confirmpass');

  let doesntMatch = password?.value !== confirmpass?.value;

  return doesntMatch ? { passwordNotMatch: true } : null;
};

export const mobileNumberLengthValidator = (control: AbstractControl) => {
  let mobilenom = control?.get('mobilenom');
  let incorrectNum = mobilenom?.value.length !== 12;
  return incorrectNum ? { invalidLength: true } : null;
};
