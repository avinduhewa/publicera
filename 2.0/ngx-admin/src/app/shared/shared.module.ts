import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedService } from './services/feed.service';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    StripHtmlTagsPipe
  ],
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  providers: [
    FeedService
  ],
  exports: [
    StripHtmlTagsPipe,
    PdfViewerModule
  ]
})
export class SharedModule { }
