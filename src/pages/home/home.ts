import { Component } from '@angular/core';
import {DateTime, NavController} from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { ILaunch } from '../../app/Models/ILaunch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nextLaunch: ILaunch;
  private latestLaunch: ILaunch;
  private countDownDate;
  private lastLaunchDate;
  private nextLaunchDate;
  private days;
  private hours;
  private minutes;
  private seconds;
  private lastLaunchVideoEmbedURL;

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider, private youtubeProvider: YoutubeProvider) {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;
      this.countDownLaunch();
      this.nextLaunch.links.mission_patch_small = this.checkMissionPatchSmall(data);
      this.nextLaunchDate = this.getFormatDateToDisplay(data.launch_date_utc);
    });

    this.spacexApi.getLatestLaunch().subscribe( data => {
      this.latestLaunch = data;
      this.latestLaunch.links.mission_patch_small = this.checkMissionPatchSmall(data);
      this.lastLaunchDate = this.getFormatDateToDisplay(data.launch_date_utc);
      this.lastLaunchVideoEmbedURL = this.youtubeProvider.getEmbedURL(data.links.video_link);
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

  getFormatDateToDisplay(dateOrigin, locale = 'en-US')
  {
    let date = new Date(dateOrigin);
    return date.toLocaleString(locale);
  }

  checkMissionPatchSmall(data){
    if(data.links.mission_patch_small === null){
      return '../../assets/imgs/unknown_avatar.png';
    }
    return data.links.mission_patch_small
  }
}
