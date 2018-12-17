import { Platform } from 'ionic-angular';
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

  constructor(
    private mediaCapture: MediaCapture,
    private platform: Platform) {

  }

  sxlog(title, param) {
    if (this.platform.is("ios")) {
      console.log(title, JSON.stringify(param));
    } else {
      alert(title + JSON.stringify(param));
    }
  }

  captureImage() {
    let configurationData = this.mediaCapture.supportedImageModes;
    this.sxlog("supportedImageModes:", configurationData);
    let options: CaptureImageOptions = {
      //Maximum number of images to capture. This limit is not supported on iOS, only one image will be taken per invocation.(optional)
      limit: 1
    };
    this.mediaCapture.captureImage(options).then((data: MediaFile[]) => {
      this.handleCaptureSuccess(data);
    }, (err: CaptureError) => {
      this.handleCaptureError(err);
    });
  }

  captureVideo() {
    let configurationData = this.mediaCapture.supportedVideoModes;
    this.sxlog("supportedVideoModes:", configurationData);
    let options: CaptureVideoOptions = {
      //Maximum number of video clips to record. This value is ignored on iOS, only one video clip can be taken per invocation.(optional)
      limit: 1,
      //Maximum duration per video clip. This will be ignored on BlackBerry.(optional)
      duration: 15,
      //Quality of the video. This parameter can only be used with Android.(optional)
      // quality:100
    };
    this.mediaCapture.captureVideo(options).then((data: MediaFile[]) => {
      this.handleCaptureSuccess(data);
    }, (err: CaptureError) => {
      this.handleCaptureError(err);
    });
  }

  captureAudio() {
    let configurationData = this.mediaCapture.supportedAudioModes;
    this.sxlog("supportedAudioModes:", configurationData);
    let options: CaptureAudioOptions = {
      //Maximum number of audio clips. Defaults to 1. On iOS you can only record one file.(optional)
      limit: 1,
      //Maximum duration of an audio sound clip, in seconds. This does not work on Android devices.(optional)
      duration: 60
    };
    this.mediaCapture.captureAudio(options).then((data: MediaFile[]) => {
      this.handleCaptureSuccess(data);
    }, (err: CaptureError) => {
      this.handleCaptureError(err);
    });
  }

  handleCaptureSuccess(data: MediaFile[]) {
    this.sxlog("captureSuccess:", data);
  }

  handleCaptureError(err: CaptureError) {
    this.sxlog("captureError:", err);
  }

}
