import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  email: string;
  password: string;
  errorMsg: string;
  rememberMeCheckBox = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const rememberMe = localStorage.getItem('RememberMe');
    if (rememberMe) {
      this.email = localStorage.getItem('email');
      this.password = localStorage.getItem('password');
      this.rememberMeCheckBox = true;
    }

    // if (localStorage.getItem('user')) {
    //   this.router.navigateByUrl('app');
    // }

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) this.loggedIn = true;
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
  }

  login() {
    this.syncLocalStorage();
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        this.errorMsg = null;
        this.userService.getUser(this.email).subscribe(response => {
          console.log('RESPONSE', response);
          localStorage.setItem('userId', response._id);
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('userType', response.userType);
          this.router.navigateByUrl('/app');
        });
      })
      .catch(err => {
        this.errorMsg = 'Something went wrong while logging in, Please try again';
      });
  }

  rememberMe() {
    const rememberMe = localStorage.getItem('RememberMe');
    if (rememberMe && !this.rememberMeCheckBox) {
      localStorage.removeItem('RememberMe');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    } else if (this.rememberMeCheckBox && this.email.length > 0 && this.password.length > 0) {
      localStorage.setItem('RememberMe', 'true');
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
    }
  }

  syncLocalStorage() {
    if (this.rememberMeCheckBox) {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');

      if (email !== this.email) {
        localStorage.setItem('email', this.email);
      }

      if (password !== this.password) {
        localStorage.setItem('password', this.password);
      }
    }
  }

}
