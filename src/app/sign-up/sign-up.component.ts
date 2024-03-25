import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenom: ['', Validators.required],
      password: ['', Validators.required],
      confirmpass: ['', Validators.required],
      companyname: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onFormSubmit() {
    console.log(this.signUpForm.value);
  }
}
