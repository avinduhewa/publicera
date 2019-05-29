import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userService.getUser(user.email).subscribe(res => {
      this.user = res;
      console.log(res);
    });
  }

  saveChanges() {
    this.userService.updateUser(this.user).subscribe(res => {
      console.log('User object', res);
      localStorage.setItem('user', JSON.stringify(this.user));
    });
  }

}
