import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ILaunch } from "../../app/Models/ILaunch";

/**
 * Generated class for the LaunchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-detail',
  templateUrl: 'launch-detail.html',
})

export class LaunchDetailPage {
  launch: ILaunch;


  constructor(public navParams: NavParams) {
    this.launch = navParams.get('launch');
    console.log(this.launch);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailPage');
  }

}
