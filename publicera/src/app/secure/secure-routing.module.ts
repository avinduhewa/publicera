import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { KeepTrendsComponent } from './secure-layout/keep-trends/keep-trends.component';
import { CompetitorComponent } from './secure-layout/competitor/competitor.component';
import { DigitalMarketingComponent } from './secure-layout/digital-marketing/digital-marketing.component';
import { PostCreationComponent } from './secure-layout/post-creation/post-creation.component';
import { SocialMediaManagementComponent } from './secure-layout/social-media-management/social-media-management.component';
import { TalktoProComponent } from './secure-layout/talkto-pro/talkto-pro.component';


const routes: Routes = [
  { path: 'app', redirectTo: '/app/trends', pathMatch: 'full' },
  {
    path: 'app',
    component: SecureLayoutComponent,
    children: [
      {
        path: 'trends',
        component: KeepTrendsComponent
      },
      {
        path: 'Competitor',
        component: CompetitorComponent
      },
      {
        path: 'DigitalMarket',
        component: DigitalMarketingComponent
      },
      {
        path: 'postCreation',
        component: PostCreationComponent
      },
      {
        path: 'socialMedia',
        component: SocialMediaManagementComponent
      },
      {
        path: 'talkToPro',
        component: TalktoProComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
