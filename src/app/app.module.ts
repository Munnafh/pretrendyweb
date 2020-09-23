import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { GraphicsdesignComponent } from './graphicsdesign/graphicsdesign.component';
import { InformationalComponent } from './informational/informational.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SeoserviceComponent } from './seoservice/seoservice.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { HomeComponent } from './home/home.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    AboutusComponent,
    ContactusComponent,
    DigitalmarketingComponent,
    EcommerceComponent,
    GraphicsdesignComponent,
    InformationalComponent,
    PortfolioComponent,
    SeoserviceComponent,
    SocialmediaComponent,
    WebdesignComponent,
    HomeComponent,
    MobileappComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
