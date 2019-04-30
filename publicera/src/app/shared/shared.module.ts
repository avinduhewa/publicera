import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtcleCardComponent } from './components/artcle-card/artcle-card.component';
import { ArtcleCardHorizontalComponent } from './components/artcle-card-horizontal/artcle-card-horizontal.component';
import { CardShadowComponent } from './components/card-shadow/card-shadow.component';
import { UserService } from './services/user.service';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { FeedService } from './services/feed.service';
import { FacebookService } from './services/facebook.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ArtcleCardComponent,
    ArtcleCardHorizontalComponent,
    CardShadowComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [
    UserService,
    FeedService,
    FacebookService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ArtcleCardComponent,
    ArtcleCardHorizontalComponent,
    CardShadowComponent
  ]
})
export class SharedModule { }
