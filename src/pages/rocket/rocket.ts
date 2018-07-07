import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { IRockets } from "../../app/Models/IRockets";

/**
 * Generated class for the RocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket',
  templateUrl: 'rocket.html',
})
export class RocketPage {

  rockets: IRockets[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getRocket("any").subscribe(data => {
      this.rockets = data;
      console.log(this.rockets);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketPage');
  }

}
