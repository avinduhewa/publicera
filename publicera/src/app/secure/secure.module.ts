import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { KeepTrendsComponent } from './secure-layout/keep-trends/keep-trends.component';
import { DigitalMarketingComponent } from './secure-layout/digital-marketing/digital-marketing.component';
import { SocialMediaManagementComponent } from './secure-layout/social-media-management/social-media-management.component';
import { CompetitorComponent } from './secure-layout/competitor/competitor.component';
import { PostCreationComponent } from './secure-layout/post-creation/post-creation.component';
import { TalktoProComponent } from './secure-layout/talkto-pro/talkto-pro.component';

import { SharedModule } from '../shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    SecureLayoutComponent,
    KeepTrendsComponent,
    DigitalMarketingComponent,
    SocialMediaManagementComponent,
    CompetitorComponent,
    PostCreationComponent,
    TalktoProComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    SharedModule,
    PdfViewerModule
  ]
})
export class SecureModule { }
