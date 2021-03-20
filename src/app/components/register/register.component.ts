import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  fullName = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  numberPhone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);

  userForm = {
    name: '',
    password: '',
    passwordConfirm: '',
    email: '',
    numberPhone: '',
    address: '',
  };

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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

    return this.fullName.hasError('maxlength')
      ? 'Name cannot be longer than 30 characters'
      : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required!';
    }

    return this.password.hasError('minlength')
      ? 'Password must be at least 8 characters long.'
      : '';
  }

  getNumPhoneErrorMessage() {
    return 'Number Phone is required!';
  }
  getAddressErrorMessage() {
    return 'Address is required!';
  }

  submit($event: Event) {
    let id = null;
    $event.preventDefault();
    this.userService.createUser(this.userForm).subscribe((data: any) => {
      console.log('sucess create user!');
      id = data.data.newUser._id;
    });
    this.userForm = {
      name: '',
      password: '',
      passwordConfirm: '',
      email: '',
      numberPhone: '',
      address: '',
    };
    this.router.navigateByUrl(`/mainpage/${id}`)
  }
}
