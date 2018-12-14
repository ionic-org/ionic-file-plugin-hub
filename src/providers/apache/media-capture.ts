import { Injectable } from '@angular/core';
import { MediaCapture } from '@ionic-native/media-capture';

@Injectable()
export class MediaCaptureProvider {

  constructor(private mediaCapture: MediaCapture) {

  }

}
