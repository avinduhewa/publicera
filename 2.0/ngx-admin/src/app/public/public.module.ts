import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThemeModule } from '../@theme/theme.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReelancerRegisterComponent } from './reelancer-register/reelancer-register.component';

@NgModule({
  declarations: [LandingPageComponent, LoginComponent, RegisterComponent, PrivacyPolicyComponent, TermsAndConditionsComponent, ReelancerRegisterComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ThemeModule,
    PdfViewerModule,
  ],
})
export class PublicModule { }
