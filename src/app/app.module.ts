import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ShowfooterComponent } from './footer/showfooter/showfooter.component';
import { SearchComponent } from './search/search.component';
import { ShopComponent } from './shop/shop.component';
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShowfooterComponent,
    SearchComponent,
    ShopComponent,

    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    ShopComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
