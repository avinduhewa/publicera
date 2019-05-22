import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavComponent } from './shared/components/nav/nav.component';
import { CommonComponent } from './shared/models/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommonComponent
=======
<<<<<<< HEAD
import { NavComponent } from './shared/components/nav/nav.component';
import { CommonComponent } from './shared/models/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommonComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> f7c6135cff2135bba77da9bc4aafb94ed173a115
>>>>>>> c84d48f5913887b35c08e193da2a4a0bc5a1f08a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
