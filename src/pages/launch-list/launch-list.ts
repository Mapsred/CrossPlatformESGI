import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunch } from '../../app/Models/ILaunch';

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

  constructor(private spacexApi: SpacexApiProvider){
    this.spacexApi.getAllLaunches("any").subscribe(data =>{
    this.launches = data;
    //console.log(data);
  }) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
