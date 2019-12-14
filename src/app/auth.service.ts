import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _registerURL;
  private readonly _loginURL;

  constructor(private http: HttpClient, private _router: Router) {
    this._registerURL = environment.apiUrl + 'signup';
    this._loginURL = environment.apiUrl + 'login';
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
    if (!this.loggedIn()) {
      this._router.navigate(['/login']);
    } else {
      localStorage.removeItem('token');
      this._router.navigate(['/login']);
    }
  }
}
