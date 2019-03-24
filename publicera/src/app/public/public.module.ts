import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginnLayoutComponent } from './loginn-layout/loginn-layout.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LoginnLayoutComponent, SliderComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
