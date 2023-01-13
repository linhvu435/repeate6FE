import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowfooterComponent } from './footer/showfooter/showfooter.component';
import { SearchComponent } from './search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer/footer.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider} from '@abacritt/angularx-social-login';

import {AuthInterceptor} from "./auth/auth.interceptor";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";



import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShowfooterComponent,
    SearchComponent,
    ShopComponent,
    FooterComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '877009480286-6ijvu977i6empufg3a1ib43uvm8psj25.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }


  ],
  exports: [
    ShopComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
