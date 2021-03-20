import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../components/mainpage/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  _url: string = 'http://localhost:3000/api/v1/user';

  constructor(private http: HttpClient) {}

  getAllUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  createUser(data: any) {
    let registerUrl = `${this._url}/signup`;
    return this.http.post(registerUrl, data);
  }

  getUser(id: any) {
    let userUrl = `${this._url}/${id}`;
    return this.http.get(userUrl);
  }

  signIn(user: any) {
    let userUrl = `${this._url}/login`;
    return this.http.post(userUrl, user);
  }

  deleteUser(id: any) {
    let userUrl = `${this._url}/${id}`;
    return this.http.delete(userUrl);
  }
}
