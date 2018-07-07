import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CompanyPage } from "../pages/company/company";
import { LaunchDetailPage } from "../pages/launch-detail/launch-detail";
import { CreditsPage } from "../pages/credits/credits";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { YoutubeProvider } from '../providers/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LaunchListPage,
    ListPage,
    CompanyPage,
    LaunchDetailPage,
    CreditsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LaunchListPage,
    ListPage,
    CompanyPage,
    LaunchDetailPage,
    CreditsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpacexApiProvider,
    YoutubeProvider
  ]
})

export class AppModule {
}
