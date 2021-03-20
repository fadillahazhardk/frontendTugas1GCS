import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  public userId = '';
  user = {
    name: '',
    email: '',
    numberPhone: '',
    address: '',
  };

  constructor(
    private _userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.router.url.split('/')[2];
    this._userService.getUser(this.userId).subscribe((data: any) => {
      this.user.name = data.data.user.name;
      this.user.email = data.data.user.email;
      this.user.numberPhone = data.data.user.numberPhone;
      this.user.address = data.data.user.address;
    });
  }

  deleteAccount() {
    this._userService.deleteUser(this.userId).subscribe(() => {
      alert('success deleting account');
      this.router.navigateByUrl(`/signin`)
    });
  }
}
