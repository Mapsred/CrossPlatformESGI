import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RocketDetailPage } from './rocket-detail';

@NgModule({
  declarations: [
    RocketDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RocketDetailPage),
  ],
})
export class RocketDetailPageModule {}
