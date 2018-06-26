import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
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
export class LaunchListPage implements OnInit{

  private launches: ILaunch[];
  private launchesCopy: ILaunch[];
  @ViewChild('scrollTopButton') scrollTopButton : ElementRef;

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider, public myElement: ElementRef) {
    this.spacexApi.getAllLaunches("any").subscribe(data => {
      this.launches = data;
      this.launchesCopy = data;
    });
  }

  ngOnInit() {
    // Ionic scroll element
    this.ionScroll = this.myElement.nativeElement.children[1].children[1];
    // On scroll function
    this.ionScroll.addEventListener("scroll", () => {
      if (this.ionScroll.scrollTop > window.innerHeight) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
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

  scrollToTop(scrollDuration) {
    let scrollStep = -this.ionScroll.scrollTop / (scrollDuration / 15);
    let scrollInterval = setInterval( () => {
      if ( this.ionScroll.scrollTop != 0 ) {
        this.ionScroll.scrollTop = this.ionScroll.scrollTop + scrollStep;
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}
