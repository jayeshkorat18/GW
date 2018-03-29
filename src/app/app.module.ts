import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { HelpPage } from '../pages/help/help';
import { TestPage } from '../pages/test/test';

import { ControlMessagesComponent } from '../pages/common/control-messages/control-messages.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ValidationProvider } from '../providers/validation/validation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    HelpPage,
    TestPage,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    HelpPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ValidationProvider
  ]
})
export class AppModule {}
