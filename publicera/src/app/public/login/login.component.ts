import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMsg: string;
  rememberMeCheckBox = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    const rememberMe = localStorage.getItem('RememberMe');
    if (rememberMe) {
      this.email = localStorage.getItem('email');
      this.password = localStorage.getItem('password');
      this.rememberMeCheckBox = true;
    }
  }


  login() {
    this.syncLocalStorage();
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log(res);
        this.errorMsg = null;
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('app');
      })
      .catch(err => {
        console.error(err);
        this.errorMsg = 'Something went wrong while logging in, Please try again';
        // @peshala fix the error message view and remove this comment
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
