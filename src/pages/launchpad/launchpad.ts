import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { ILaunchpad } from "../../app/Models/ILaunchpad";
import { RocketDetailPage } from "../rocket-detail/rocket-detail";

/**
 * Generated class for the LaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad',
  templateUrl: 'launchpad.html',
})
export class LaunchpadPage {
  launchpads: ILaunchpad[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getLaunchpas("any").subscribe(data => {
      this.launchpads = data;
    })
  }

  redirectToRocketDetail(rocket) {
    return this.navCtrl.push(RocketDetailPage, {
      rocket: rocket
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadPage');
  }

}
