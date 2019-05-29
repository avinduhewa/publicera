import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './secure.component';
import { TrendsComponent } from './trends/trends.component';
import { CmsComponent } from './cms/cms.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'app', redirectTo: 'app/dashboard' },
  {
    path: 'app',
    component: SecureComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'trends', redirectTo: 'trends/latest' },
      { path: 'trends/:type', component: TrendsComponent },
      { path: 'cms', redirectTo: 'cms/facebook' },
      { path: 'cms/:type', component: CmsComponent },
      { path: 'professionals', component: ProfessionalsComponent },
      { path: 'guidelines', redirectTo: 'guidlines/all' },
      { path: 'guidelines/:type', component: GuidelinesComponent },
      { path: 'upgrade', component: UpgradeComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule { }
