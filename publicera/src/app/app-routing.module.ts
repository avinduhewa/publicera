import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { SecureLayoutComponent } from './secure/secure-layout/secure-layout.component';

const routes: Routes = [
<<<<<<< HEAD
=======
  { path: '', redirectTo: '/login', pathMatch: 'full' },
>>>>>>> c84d48f5913887b35c08e193da2a4a0bc5a1f08a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
