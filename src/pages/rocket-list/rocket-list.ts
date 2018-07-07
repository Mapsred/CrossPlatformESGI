import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { IRockets } from "../../app/Models/IRockets";
import { RocketDetailPage } from "../rocket-detail/rocket-detail";

/**
 * Generated class for the RocketListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {

  rockets: IRockets[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getRocket("any").subscribe(data => {
      this.rockets = data;
    })
  }

  redirectToRocketDetail(rocket) {
    return this.navCtrl.push(RocketDetailPage, {
      rocket: rocket
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }

}
