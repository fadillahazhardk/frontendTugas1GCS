import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  user = {
    email: '',
    password: '',
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

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required!';
    }

    return this.password.hasError('minlength')
      ? 'Password must be at least 8 characters long.'
      : '';
  }

  submit($event: Event) {
    let id = null;
    $event.preventDefault();
    this.userService.signIn(this.user).subscribe((data: any) => {
      console.log('sucess signIn');
      id = data.data._id;
      this.user = {
        email: '',
        password: '',
      };
      this.router.navigateByUrl(`/mainpage/${id}`);
    });
  }
}
