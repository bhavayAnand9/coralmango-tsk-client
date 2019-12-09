import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {LoginUser} from '../login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUserData: LoginUser = new class implements LoginUser {
    email: string;
    password: string;
  };

  constructor(private _auth: AuthService, private _router: Router) {
    if (this._auth.loggedIn()) {
      this._router.navigate(['/homepage']);
    }
  }

  ngOnInit() {
  }

  loginUser = () => {

    this._auth.loginUser(this.loginUserData)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/homepage']);
      }, err => {
        console.log(err.error.Alert);
        alert(err.error.Alert);
      });
  }

}
