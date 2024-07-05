import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { BajuBandComponent } from './baju-band/baju-band.component';
import { StoneNosePinComponent } from './stone-nose-pin/stone-nose-pin.component';
import { ATMComponent } from './atm/atm.component';
import { BanglesComponent } from './bangles/bangles.component';
import { FancyHaarComponent } from './fancy-haar/fancy-haar.component';
import { HaramSetComponent } from './haram-set/haram-set.component';
import { AntiqueComponent } from './antique/antique.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { LoginComponent } from './login/login.component';
import { FancyNosePinComponent } from './fancy-nose-pin/fancy-nose-pin.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { BajubandpdComponent } from './bajubandpd/bajubandpd.component';
import { AntiquepdComponent } from './antiquepd/antiquepd.component';
import { HaramsetpdComponent } from './haramsetpd/haramsetpd.component';
import { FancyhaarpdComponent } from './fancyhaarpd/fancyhaarpd.component';
import { BanglespdComponent } from './banglespd/banglespd.component';
import { BlackBeedspdComponent } from './black-beedspd/black-beedspd.component';
import { BlackBeedsComponent } from './black-beeds/black-beeds.component';
import { RingsComponent } from './rings/rings.component';
import { RingspdComponent } from './ringspd/ringspd.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { JhumkaComponent } from './jhumka/jhumka.component';
import { JhumkapdComponent } from './jhumkapd/jhumkapd.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { NecklacepdComponent } from './necklacepd/necklacepd.component';
import { BraceletspdComponent } from './braceletspd/braceletspd.component';
import { StoneLocketpdComponent } from './stone-locketpd/stone-locketpd.component';
import { StoneLocketComponent } from './stone-locket/stone-locket.component';
import { TheModernLocketComponent } from './the-modern-locket/the-modern-locket.component';
import { TheModernLocketpdComponent } from './the-modern-locketpd/the-modern-locketpd.component';
import { AlphabetUnisexLocketsComponent } from './alphabet-unisex-lockets/alphabet-unisex-lockets.component';
import { AlphabetUnisexLocketspdComponent } from './alphabet-unisex-locketspd/alphabet-unisex-locketspd.component';
import { RedRoseLocketsComponent } from './red-rose-lockets/red-rose-lockets.component';
import { RedRoseLocketspdComponent } from './red-rose-locketspd/red-rose-locketspd.component';
import { FancyLocketsComponent } from './fancy-lockets/fancy-lockets.component';
import { FancyLocketspdComponent } from './fancy-locketspd/fancy-locketspd.component';
import { TopsComponent } from './tops/tops.component';
import { JBalisComponent } from './jbalis/jbalis.component';
import { FancyEarringsComponent } from './fancy-earrings/fancy-earrings.component';
import { TopspdComponent } from './topspd/topspd.component';
import { JBalispdComponent } from './jbalispd/jbalispd.component';
import { FancyEarringspdComponent } from './fancy-earringspd/fancy-earringspd.component';
import { MatrikapromisesComponent } from './matrikapromises/matrikapromises.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
 
  {
    path:'',component:ContentComponent },
  {
    path:'bajuband',component:BajuBandComponent
  },
  {
    path:'StoneNosePin',component:StoneNosePinComponent
  },
  {
    path:'FancyNosePin',component:FancyNosePinComponent
  },
  {
    path:'atm',component:ATMComponent
  },
  {
    path:'Bangles',component:BanglesComponent
  },
  {
    path:'Rings',component:RingsComponent
  },  
  {
    path:'BlackBeeds',component:BlackBeedsComponent
  },
  {
    path:'ViewMore',component:ViewMoreComponent
  },
  {
    path:'GiftCard',component:GiftCardComponent
  },
  {
    path:'Antique',component:AntiqueComponent
  },
  {
    path:'HaramSet',component:HaramSetComponent
  },
  {
    path:'Bracelets',component:BraceletsComponent
  },
  {
    path:'StoneLocket',component:StoneLocketComponent
  },
  {
    path:'TheModernLocket',component:TheModernLocketComponent
  },
  {
    path:'RedRoseLockets',component:RedRoseLocketsComponent
  },
  {
    path:'FancyLockets',component:FancyLocketsComponent
  },
  {
    path:'Jhumka',component:JhumkaComponent
  },
  {
    path:'AlphabetUnisexLockets',component:AlphabetUnisexLocketsComponent
  },
  {
    path:'Tops',component:TopsComponent
  },
  {
    path:'JBalis',component:JBalisComponent
  },
  {
    path:'FancyEarrings',component:FancyEarringsComponent
  },
  {
    path:'FancyLocketspd',component:FancyLocketspdComponent
  },
  {
    path:'Necklace',component:NecklaceComponent
  },
  {
    path:'FancyHaar',component:FancyHaarComponent
  },
  {
    path:'ViewAllProducts',component:ViewAllProductsComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'bajubandpd',component:BajubandpdComponent
  },
  {
    path:'Antiquepd',component:AntiquepdComponent
  },
  {
    path:'haramsetpd',component:HaramsetpdComponent
  },
  {
    path:'fancyhaarpd',component:FancyhaarpdComponent
  },
  {
    path:'Banglespd',component:BanglespdComponent
  },
  {
    path:'BlackBeedspd',component:BlackBeedspdComponent
  },
  {
    path:'Ringspd',component:RingspdComponent
  },
  {
    path:'Jhumkapd',component:JhumkapdComponent
  },
  {
    path:'Braceletspd',component:BraceletspdComponent
  },
  {
    path:'Necklacepd',component:NecklacepdComponent
  },  
  {
    path:'StoneLocketpd',component:StoneLocketpdComponent
  },
  {
    path:'TheModernLocketpd',component:TheModernLocketpdComponent
  },
  {
    path:'AlphabetUnisexLocketspd',component:AlphabetUnisexLocketspdComponent
  },
  {
    path:'RedRoseLocketspd',component:RedRoseLocketspdComponent
  },
  {
    path:'Topspd',component:TopspdComponent
  },
  {
    path:'JBalispd',component:JBalispdComponent
  },
  {
    path:'FancyEarringspd',component:FancyEarringspdComponent
  },
  {
    path:'Matrikapromises',component:MatrikapromisesComponent
  },
  {
    path:'Signup',component:SignupComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
