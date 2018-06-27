import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ICompany } from '../../app/Models/ICompany';

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {

  company: ICompany[];

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.spacexApi.getCompany("any").subscribe(data => {
      this.company = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
    console.log(this.company);
  }

}
