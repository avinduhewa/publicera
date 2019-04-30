import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  loggedIn = false;
  registerForm: FormGroup;
  section1Valid = false;
  section2Valid = false;
  section3Valid = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: this.fb.control('', Validators.pattern('(.*?)')),
      email: this.fb.control('', Validators.pattern('(.*?)')),
      username: this.fb.control('', Validators.pattern('(.*?)')),
      password: this.fb.control('', Validators.pattern('(.*?)')),
      confPassword: this.fb.control('', Validators.pattern('(.*?)')),
      companyId: this.fb.control('', Validators.pattern('(.*?)')),
      companyName: this.fb.control('', Validators.pattern('(.*?)')),
      industry: this.fb.control('', Validators.pattern('(.*?)')),
      noOfEmployees: this.fb.control('', Validators.pattern('(.*?)')),
      companyValue: this.fb.control('', Validators.pattern('(.*?)')),
      facebookLink: this.fb.control('', Validators.pattern('(.*?)')),
      instagramLink: this.fb.control('', Validators.pattern('(.*?)')),
      twitterLink: this.fb.control('', Validators.pattern('(.*?)')),
      package: this.fb.control('', Validators.pattern('(.*?)')),
    });
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) this.loggedIn = true;
  }

  change(type) {
    if (this.submitted) {
      this.next(type);
    } else {
      this.checkValid(type);
    }
  }

  next(type) {
    const form = this.registerForm.controls;
    if (type === 'first') {
      this.checkPassword();
      if (form.name.valid && form.email.valid && form.username.valid && form.password.valid && form.confPassword.valid) {
        this.submitted = false;
        this.section1Valid = true;
      } else {
        this.section1Valid = false;
        this.submitted = true;
      }
    }

    if (type === 'second') {
      if (form.companyId.valid
        && form.companyName.valid
        && form.industry.valid
        && form.noOfEmployees.valid
        && form.companyValue.valid
        && form.facebookLink.valid
        && form.instagramLink.valid
        && form.twitterLink.valid) {
        this.submitted = false;
        this.section2Valid = true;
      } else {
        this.submitted = true;
        this.section2Valid = false;
      }

    }

    if (type === 'third') {
      this.submitted = form.package.valid;
      this.section3Valid = form.package.valid;
    }
  }

  checkValid(type) {
    const form = this.registerForm.controls;
    this.checkPassword();
    this.section1Valid = type === 'first'
      && form.name.valid
      && form.email.valid
      && form.username.valid
      && form.password.valid
      && form.confPassword.valid;
    this.section2Valid = type === 'second'
      && form.companyId.valid
      && form.companyName.valid
      && form.industry.valid
      && form.noOfEmployees.valid
      && form.companyValue.valid
      && form.facebookLink.valid
      && form.instagramLink.valid
      && form.twitterLink.valid;
    this.section3Valid = type === 'third' && form.package.valid;

  }

  checkPassword() {
    const form = this.registerForm.controls;
    if (form.password.value !== form.confPassword.value) {
      form.confPassword.setErrors({ 'incorrect': true });
    } else {
      form.confPassword.setErrors(null);
    }
  }

  register() {
    const user = this.userService.createUserObj(this.registerForm.value);
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, this.registerForm.value.password)
      .then(res => {
        return this.userService.register(user).subscribe(response => {
          localStorage.setItem('userId', response._id);
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('userType', user.userType);
          this.router.navigateByUrl('app');
        });
      })
      .catch(err => {
        // console.error(err);
      });

  }

}
