import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _registerURL;
  private readonly _loginURL;

  constructor(private http: HttpClient, private _router: Router) {
    this._registerURL = environment.apiUrl + 'user/signup';
    this._loginURL = environment.apiUrl + 'user/login';
  }

  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginURL, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(['/login']);
  }
}
