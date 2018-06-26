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

  private launches: ILaunch[];
  private launchesCopy: ILaunch[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getAllLaunches("any").subscribe(data => {
      this.launches = data;
      this.launchesCopy = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

  redirectToDetail(launch) {
    return this.navCtrl.push(LaunchDetailPage, {
      launch: launch
    })
  }

  initializeLaunches() {
    this.launches = this.launchesCopy;
  }

  getLaunches(ev: any) {
    // Reset items back to all of the items
    this.initializeLaunches();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.launches = this.launches.filter((launch) => {
        return (launch.mission_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
