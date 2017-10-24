import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AuthProvider } from '../provider/auth.provider';
import { HttpProvider } from '../provider/http-interceptor.provider';

import { Http, HttpModule, XHRBackend, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) =>
      { return new HttpProvider(backend, defaultOptions); },
      deps: [XHRBackend, RequestOptions]
    },
    AuthProvider
  ]
})
export class AppModule { }
