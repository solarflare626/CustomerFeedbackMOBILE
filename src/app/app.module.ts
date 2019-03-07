import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { CustomerAuthenticationService } from './services/customer/customer-authentication.service';
import { OwnerAuthenticationService } from './services/owner/owner-authentication.service';
import { AdminAuthenticationService } from './services/admin/admin-authentication.service';
import { HttpService } from './services/shared/http.service';
import { AngularHttpService } from './services/shared/http/angular-http.service';
import { NativeHttpService } from './services/shared/http/native-http.service';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule, HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    BarcodeScanner,
     CustomerAuthenticationService,
     AdminAuthenticationService,
     OwnerAuthenticationService,
     HttpService,
     AngularHttpService,
     NativeHttpService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
