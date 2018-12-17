import { CameraProvider } from './../../providers/apache/camera';
import { CameraOptions, DestinationType, PictureSourceType, EncodingType, MediaType, Direction } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  options: CameraOptions = {
    quality: 50,
    destinationType: DestinationType.FILE_URL,
    sourceType: PictureSourceType.CAMERA,
    allowEdit: false,
    encodingType: EncodingType.JPEG,
    targetWidth: 1080,
    targetHeight: 1920,
    mediaType: MediaType.PICTURE,
    correctOrientation: false,
    saveToPhotoAlbum: false,
    cameraDirection: Direction.BACK,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraProvider:CameraProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
    this.options = {
      quality:50,
      destinationType: DestinationType.FILE_URL,
      sourceType: PictureSourceType.CAMERA,
      allowEdit:false,
      encodingType: EncodingType.JPEG,
      targetWidth:1080,
      targetHeight: 1920,
      mediaType: MediaType.PICTURE,
      correctOrientation:false,
      saveToPhotoAlbum:false,
      cameraDirection: Direction.BACK,
    }
  }

  formatOptions() {
    console.log("formatOptions");
    for (const key in this.options) {
      if (this.options.hasOwnProperty(key)) {
        const element = this.options[key];
        if ((typeof element) == "string") {
          this.options[key] = Number(element);
        }
      }
    }
  }

  clickGetPicture() {
    this.formatOptions();
    console.log("clickGetPicture:",JSON.stringify(this.options));
    this.cameraProvider.getPicture(this.options);
  }

}
