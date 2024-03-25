import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signUpForm = new FormGroup({
    emailInputFormControl: new FormControl(''),
    passwordInputFormControl: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe((data) => {});
  }
  onSubmitBtn() {
    console.log('Look At Sign Up Input Values: ', this.signUpForm.value);
  }
}
