import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedService } from './services/feed.service';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserService } from './services/user.service';
import { FacebookService } from './services/facebook.service';
import { ApiService } from './services/api.service';
import { TwitterService } from 'ngx-twitter-api';
import { Interceptor } from './interceptor/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    StripHtmlTagsPipe,
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
  ],
  providers: [
    FeedService,
    UserService,
    FacebookService,
    ApiService,
    TwitterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  exports: [
    StripHtmlTagsPipe,
    PdfViewerModule,
  ],
})
export class SharedModule { }
