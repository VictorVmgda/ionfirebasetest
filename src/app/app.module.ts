import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDibZ533gNFX65PKdKm4cjZrcuWd1DnlSg",
      authDomain: "testeionic-e732d.firebaseapp.com",
      databaseURL: "https://testeionic-e732d.firebaseio.com",
      projectId: "testeionic-e732d",
      storageBucket: "testeionic-e732d.appspot.com",
      messagingSenderId: "915356651585"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider
  ]
})
export class AppModule {}
