import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {RegisterUser} from '../registeruser.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerUserData: RegisterUser = new class implements RegisterUser {
    email: string;
    password: string;
  };

  constructor(private _auth: AuthService, private _router: Router) {
  }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(console.log, console.error);

    this._router.navigate(['/login'])
  }

}
