import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { SecureLayoutComponent } from './secure/secure-layout/secure-layout.component';

const routes: Routes = [
  {path: "", redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
