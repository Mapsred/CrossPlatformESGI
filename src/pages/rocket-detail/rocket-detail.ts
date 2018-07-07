import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { IRockets } from "../../app/Models/IRockets";

/**
 * Generated class for the RocketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-detail',
  templateUrl: 'rocket-detail.html',
})
export class RocketDetailPage {

  rocket: IRockets;


  constructor(public navParams: NavParams) {
    this.rocket = navParams.get('rocket');
    console.log(this.rocket);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailPage');
  }

}
