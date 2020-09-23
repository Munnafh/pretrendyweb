import { MobileappComponent } from './mobileapp/mobileapp.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SeoserviceComponent } from './seoservice/seoservice.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InformationalComponent } from './informational/informational.component';
import { GraphicsdesignComponent } from './graphicsdesign/graphicsdesign.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutusComponent},
  {path:'contact-us', component:ContactusComponent},
  {path:'digitalmarketing', component:DigitalmarketingComponent},
  {path:'ecommerce', component:EcommerceComponent},
  {path:'graphicsdesign', component:GraphicsdesignComponent},
  {path:'informational', component:InformationalComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'seoservice', component:SeoserviceComponent},
  {path:'socialmedia', component:SocialmediaComponent},
  {path:'webdesign', component:WebdesignComponent},
  {path:'mobileapp', component:MobileappComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
