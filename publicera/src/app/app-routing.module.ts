import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { SecureLayoutComponent } from './secure/secure-layout/secure-layout.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'secure', component: SecureLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
