import { Injectable } from '@angular/core';
import {
  MediaCapture,
  CaptureImageOptions,
  CaptureVideoOptions,
  CaptureAudioOptions,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture';

@Injectable()
export class MediaCaptureProvider {

  constructor(private mediaCapture: MediaCapture) {

  }

  captureImage() {
    let options: CaptureImageOptions = {
      //Maximum number of images to capture. This limit is not supported on iOS, only one image will be taken per invocation.(optional)
      limit: 1
    };
    this.mediaCapture.captureImage(options).then((data: MediaFile[]) => {
      console.log(data)
    }, (err: CaptureError) => {
      console.error(err)
    });
  }

  captureVideo() {
    let options: CaptureVideoOptions = {
      //Maximum number of video clips to record. This value is ignored on iOS, only one video clip can be taken per invocation.(optional)
      limit: 1,
      //Maximum duration per video clip. This will be ignored on BlackBerry.(optional)
      duration:15,
      //Quality of the video. This parameter can only be used with Android.(optional)
      // quality:100
    };
    this.mediaCapture.captureVideo(options).then((data: MediaFile[]) => {
      console.log(data)
    }, (err: CaptureError) => {
      console.error(err)
    });
  }

  captureAudio() {
    let options: CaptureAudioOptions = {
      //Maximum number of audio clips. Defaults to 1. On iOS you can only record one file.(optional)
      limit: 1,
      //Maximum duration of an audio sound clip, in seconds. This does not work on Android devices.(optional)
      duration:60
     };
    this.mediaCapture.captureAudio(options).then((data: MediaFile[]) => {
      console.log(data)
    }, (err: CaptureError) => {
      console.error(err)
    });
  }

}
