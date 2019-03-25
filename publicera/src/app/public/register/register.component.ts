import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confPassword: string;
  companyName: string;
  industry: string;
  errorMsg: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  register() {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log(res);
        const user = {
          email: this.email,
          password: this.password,
          companyName: this.companyName,
          industry: this.industry
        };
        return this.userService.register(user).subscribe(response => {
          localStorage.setItem('userId', response._id);
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigateByUrl('app');
        });
      })
      .catch(err => {
        console.error(err);
        this.errorMsg = 'Something went wrong while trying to register, Please try again';
      });
  }

}
