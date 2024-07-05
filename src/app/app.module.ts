import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BajuBandComponent } from './baju-band/baju-band.component';
import { ImgcontentComponent } from './imgcontent/imgcontent.component';
import { PromisesofficeComponent } from './promisesoffice/promisesoffice.component';
import { ATMComponent } from './atm/atm.component';
import { BanglesComponent } from './bangles/bangles.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { AntiqueComponent } from './antique/antique.component';
import { FancyHaarComponent } from './fancy-haar/fancy-haar.component';
import { HaramSetComponent } from './haram-set/haram-set.component';
import { StoneNosePinComponent } from './stone-nose-pin/stone-nose-pin.component';
import { FancyNosePinComponent } from './fancy-nose-pin/fancy-nose-pin.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { BajubandpdComponent } from './bajubandpd/bajubandpd.component';
import { AntiquepdComponent } from './antiquepd/antiquepd.component';
import { HaramsetpdComponent } from './haramsetpd/haramsetpd.component';
import { FancyhaarpdComponent } from './fancyhaarpd/fancyhaarpd.component';
import { BanglespdComponent } from './banglespd/banglespd.component';
import { BlackBeedsComponent } from './black-beeds/black-beeds.component';
import { BlackBeedspdComponent } from './black-beedspd/black-beedspd.component';
import { RingsComponent } from './rings/rings.component';
import { RingspdComponent } from './ringspd/ringspd.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { BraceletspdComponent } from './braceletspd/braceletspd.component';
import { JhumkaComponent } from './jhumka/jhumka.component';
import { JhumkapdComponent } from './jhumkapd/jhumkapd.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { NecklacepdComponent } from './necklacepd/necklacepd.component';
import { StoneLocketComponent } from './stone-locket/stone-locket.component';
import { StoneLocketpdComponent } from './stone-locketpd/stone-locketpd.component';
import { TheModernLocketComponent } from './the-modern-locket/the-modern-locket.component';
import { TheModernLocketpdComponent } from './the-modern-locketpd/the-modern-locketpd.component';
import { AlphabetUnisexLocketsComponent } from './alphabet-unisex-lockets/alphabet-unisex-lockets.component';
import { AlphabetUnisexLocketspdComponent } from './alphabet-unisex-locketspd/alphabet-unisex-locketspd.component';
import { RedRoseLocketsComponent } from './red-rose-lockets/red-rose-lockets.component';
import { RedRoseLocketspdComponent } from './red-rose-locketspd/red-rose-locketspd.component';
import { FancyLocketsComponent } from './fancy-lockets/fancy-lockets.component';
import { FancyLocketspdComponent } from './fancy-locketspd/fancy-locketspd.component';
import { TopsComponent } from './tops/tops.component';
import { TopspdComponent } from './topspd/topspd.component';
import { JBalisComponent } from './jbalis/jbalis.component';
import { JBalispdComponent } from './jbalispd/jbalispd.component';
import { FancyEarringsComponent } from './fancy-earrings/fancy-earrings.component';
import { FancyEarringspdComponent } from './fancy-earringspd/fancy-earringspd.component';
import { MatrikapromisesComponent } from './matrikapromises/matrikapromises.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    BajuBandComponent,
    ImgcontentComponent,
    PromisesofficeComponent,
    ATMComponent,
    BanglesComponent,
    GiftCardComponent,
    ViewMoreComponent,
    AntiqueComponent,
    FancyHaarComponent,
    HaramSetComponent,
    StoneNosePinComponent,
    FancyNosePinComponent,
    LoginComponent,
    ViewAllProductsComponent,
    BajubandpdComponent,
    AntiquepdComponent,
    HaramsetpdComponent,
    FancyhaarpdComponent,
    BanglespdComponent,
    BlackBeedsComponent,
    BlackBeedspdComponent,
    RingsComponent,
    RingspdComponent,
    BraceletsComponent,
    BraceletspdComponent,
    JhumkaComponent,
    JhumkapdComponent,
    NecklaceComponent,
    NecklacepdComponent,
    StoneLocketComponent,
    StoneLocketpdComponent,
    TheModernLocketComponent,
    TheModernLocketpdComponent,
    AlphabetUnisexLocketsComponent,
    AlphabetUnisexLocketspdComponent,
    RedRoseLocketsComponent,
    RedRoseLocketspdComponent,
    FancyLocketsComponent,
    FancyLocketspdComponent,
    TopsComponent,
    TopspdComponent,
    JBalisComponent,
    JBalispdComponent,
    FancyEarringsComponent,
    FancyEarringspdComponent,
    MatrikapromisesComponent,
    SignupComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule {
}
