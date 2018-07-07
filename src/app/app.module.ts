import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CompanyPage } from "../pages/company/company";
import { LaunchDetailPage } from "../pages/launch-detail/launch-detail";
import { CreditsPage } from "../pages/credits/credits";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';

import { RocketPage } from "../pages/rocket/rocket";
import { CapsulePage } from "../pages/capsule/capsule";
import { LaunchpadPage } from "../pages/launchpad/launchpad";
import { StatsPage } from "../pages/stats/stats";
import { YoutubeProvider } from '../providers/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LaunchListPage,
    RocketPage,
    CapsulePage,
    LaunchpadPage,
    CompanyPage,
    LaunchDetailPage,
    CreditsPage,
    StatsPage
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
    RocketPage,
    CapsulePage,
    LaunchpadPage,
    CompanyPage,
    LaunchDetailPage,
    CreditsPage,
    StatsPage
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
