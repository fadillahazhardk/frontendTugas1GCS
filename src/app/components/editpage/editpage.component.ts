import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  fullName = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  numberPhone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);


  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required!';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getNameErrorMessage() {
    if (this.fullName.hasError('required')) {
      return 'Full Name is Required!';
    }

    return this.fullName.hasError('maxlength') ? 'Name cannot be longer than 30 characters' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required!';
    }

    return this.password.hasError('minlength') ? 'Password must be at least 8 characters long.' : '';
  }

  getNumPhoneErrorMessage() {
    return 'Number Phone is required!';
  }
  getAddressErrorMessage() {
    return 'Address is required!';
  }

  submit() {

  }
}
