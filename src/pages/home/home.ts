import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { YoutubeProvider } from '../../providers/youtube/youtube';
import { ILaunch } from '../../app/Models/ILaunch';
import { AlertController } from 'ionic-angular';

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
  private nextLaunchVideoEmbedURL;

  constructor(public navCtrl: NavController, private spacexApi: SpacexApiProvider, private youtubeProvider: YoutubeProvider, public alertCtrl: AlertController) {
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;
      this.countDownLaunch();
      this.nextLaunch.links.mission_patch_small = this.checkMissionPatchSmall(data);
      this.nextLaunchDate = this.getFormatDateToDisplay(data.launch_date_utc);
      this.nextLaunchVideoEmbedURL = data.links.video_link !== null ? this.youtubeProvider.getEmbedURL(data.links.video_link) : null;
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
    // let test = new Date().getTime() + 5000;
    let distance, now;

    let interval = setInterval( handle => {
      // Get todays date and time
      now = new Date().getTime();

      // Find the distance between now an the count down date
      distance = this.countDownDate - now;
      // distance = test - now;

      // If the count down is finished, write some text
      if (now >= this.countDownDate) {
        clearInterval(interval);
        document.getElementById("countdown").remove();
        this.refreshLive();
      }

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    }, 1000)
  }

  refreshLive() {
    this.spacexApi.getNextLaunch().subscribe(data => {
      this.nextLaunchVideoEmbedURL = data.links.video_link !== null ? this.youtubeProvider.getEmbedURL(data.links.video_link) : null;
      // this.nextLaunchVideoEmbedURL = this.youtubeProvider.getEmbedURL("https://www.youtube.com/watch?v=EevV3VnSf9k");
      if(this.nextLaunchVideoEmbedURL !== null){
        this.removeRefreshButton();
      } else {
        this.alertCtrl.create({
          title: 'Live not yet started!',
          subTitle: 'Sorry, the live is not yet started. Please, retry later.',
          buttons: ['OK']
        }).present();
      }
    });
  }

  removeRefreshButton() {
    let refreshLiveButtonElement = document.getElementById('refreshLiveButton');
    if(refreshLiveButtonElement !== null){
      refreshLiveButtonElement.remove();
    }
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
