import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure-layout',
  templateUrl: './secure-layout.component.html',
  styleUrls: ['./secure-layout.component.scss']
})
export class SecureLayoutComponent implements OnInit {

  navBarStatus: boolean = false;
  constructor() { }

  openNav() {
    this.navBarStatus = !this.navBarStatus;
    // document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    // document.getElementById("mySidenav").style.width = "80px";
    // document.getElementById("main").style.marginLeft = "200px";
  }

  ngOnInit() {
  }

}
