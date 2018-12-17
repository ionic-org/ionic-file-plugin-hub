import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCaptureProvider } from '../../providers/apache/media-capture';

/**
 * Generated class for the MediaCapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media-capture',
  templateUrl: 'media-capture.html',
})
export class MediaCapturePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private media_capture:MediaCaptureProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaCapturePage');
  }

  clickCaptureImage() {
    this.media_capture.captureImage();
  }

  clickCaptureVideo() {
    this.media_capture.captureVideo();
  }

  clickCaptureAudio() {
    this.media_capture.captureAudio();
  }

}
