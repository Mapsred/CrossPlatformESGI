import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IRockets } from '../../app/Models/IRockets';
import { ICapsule } from "../../app/Models/ICapsule";
import { ICapsuleDetails } from "../../app/Models/ICapsuleDetails";
import { ILaunchpad } from "../../app/Models/ILaunchpad";
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  private rockets: IRockets[];
  private capsules: ICapsule[];
  private capsuleDetails: ICapsuleDetails[];
  private launchpads: ILaunchpad[];
  private globalFilter = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getRocket("any").subscribe(data => {
      this.rockets = data;
    });
    this.spacexApi.getCapsule("any").subscribe(data => {
      this.capsules = data;
    });
    this.spacexApi.getCapsuleDetails("any").subscribe(data => {
      this.capsuleDetails = data;
    });
    this.spacexApi.getLaunchpas("any").subscribe(data => {
      this.launchpads = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

  rocketChange(ev: any) {
    this.globalFilter['rocket_id'] = ev;
  }

  capsuleChange(ev: any) {
    this.globalFilter['cap_serial'] = ev;
  }

  launchpadChange(ev: any) {
    this.globalFilter['site_id'] = ev;
  }

  filtered() {
    this.viewCtrl.dismiss(this.globalFilter);
  }

  reset() {
    this.viewCtrl.dismiss('reset');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
