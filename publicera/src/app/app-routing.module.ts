import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { LoginComponent } from './public/login/login.component'

const routes: Routes = [

  { path: 'home', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
