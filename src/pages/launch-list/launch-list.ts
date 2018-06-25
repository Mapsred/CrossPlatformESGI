import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunch } from '../../app/Models/ILaunch';
import { LaunchDetailPage } from "../launch-detail/launch-detail";

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {

  launches: ILaunch[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunches("any").subscribe(data => {
      this.launches = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  redirectToDetail(launch) {
    return this.navCtrl.push(LaunchDetailPage, {
      launch: launch
    })
  }

}
