import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Injectable()
export class CameraProvider {

  constructor(private camera:Camera) {}

  getPicture(options: CameraOptions) {
    this.camera.getPicture(options).then(data=>{
      console.log(JSON.stringify(data));
    },err=>{
      console.error(err);
    })
  }
}
