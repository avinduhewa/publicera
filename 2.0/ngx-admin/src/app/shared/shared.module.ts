import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedService } from './services/feed.service';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserService } from './services/user.service';
import { FacebookService } from './services/facebook.service';

@NgModule({
  declarations: [
    StripHtmlTagsPipe
  ],
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  providers: [
    FeedService,
    UserService,
    FacebookService
  ],
  exports: [
    StripHtmlTagsPipe,
    PdfViewerModule
  ]
})
export class SharedModule { }
