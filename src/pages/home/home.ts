import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunch } from '../../app/Models/ILaunch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nextLaunch: ILaunch;
  private latestLaunch: ILaunch;
  private countDownDate;
  private days;
  private hours;
  private minutes;
  private seconds;

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider) {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;
      this.countDownLaunch();
      console.log(data);
    });

    this.spacexApi.getLatestLaunch().subscribe( data => {
      this.latestLaunch = data;
      console.log(data);
    });
  }

  countDownLaunch() {
    this.countDownDate = this.nextLaunch.launch_date_unix * 1000;

    let interval = setInterval( handle => {
      // console.log(this.seconds);
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(interval);
        // document.getElementById("demo").innerHTML = "EXPIRED"
      }

    }, 1000)
  }

}
