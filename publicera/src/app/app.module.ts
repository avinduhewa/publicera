import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules 
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';


////

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    SharedModule,
    PublicModule,
    SecureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
