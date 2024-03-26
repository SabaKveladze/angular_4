import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordConfirmationValidator } from '../validators/password-confirmation-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  // signUpForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   mobilenom: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmpass: new FormControl(''),
  //   companyname: new FormControl(''),
  // });

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
            Validators.pattern('[a-zA-Z ]*'),
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(17),
            Validators.pattern('[a-zA-Z ]*'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        mobilenom: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpass: ['', Validators.required],
        companyname: ['', Validators.required],
      },
      { validators: [passwordConfirmationValidator] }
    );
  }

  ngOnInit(): void {}
  onFormSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    } else {
      console.log('Form is Invalid yet');
    }
  }
  get firstname() {
    return this.signUpForm.get('firstname');
  }
  get lastname() {
    return this.signUpForm.get('lastname');
  }

  get email() {
    return this.signUpForm.get('email');
  }
  get mobilenom() {
    return this.signUpForm.get('mobilenom');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmpassword() {
    return this.signUpForm.get('confirmpass');
  }
  get companyname() {
    return this.signUpForm.get('companyname');
  }
}
