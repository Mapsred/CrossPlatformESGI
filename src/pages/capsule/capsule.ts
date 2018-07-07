import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpacexApiProvider } from "../../providers/spacex-api/spacex-api";
import { ICapsule } from "../../app/Models/ICapsule";

/**
 * Generated class for the CapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule',
  templateUrl: 'capsule.html',
})
export class CapsulePage {

  capsules: ICapsule[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getCapsule("any").subscribe(data => {
      this.capsules = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulePage');
  }

}
