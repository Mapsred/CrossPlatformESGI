import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class YoutubeProvider {

  private regex = /https?:\/\/www.youtube.com\/watch\?v=(.+)/;
  private baseEmbedURL = 'https://www.youtube.com/embed/';
  private youtubeVideoUrl;

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Return the video ID
   */
  getVideoId() {
    return this.youtubeVideoUrl.match(this.regex)[1];
  }

  /**
   * Return the link of the youtube video which can be embed
   * @returns {string}
   */
  getEmbedURL(youtubeVideoURL) {
    this.setYoutubeVideoURL(youtubeVideoURL);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.baseEmbedURL + this.getVideoId());
  }

  /**
   *
   * @param youtubeVideoURL
   */
  setYoutubeVideoURL(youtubeVideoURL) {
    this.youtubeVideoUrl = youtubeVideoURL;
  }
}
