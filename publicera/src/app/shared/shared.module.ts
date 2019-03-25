import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtcleCardComponent } from './component/artcle-card/artcle-card.component';
import { ArtcleCardHorizontalComponent } from './component/artcle-card-horizontal/artcle-card-horizontal.component';
import { CardShadowComponent } from './component/card-shadow/card-shadow.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ArtcleCardComponent, ArtcleCardHorizontalComponent, CardShadowComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
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
