import { IOSFilePicker } from '@ionic-native/file-picker';
import { Injectable } from '@angular/core';

@Injectable()
export class IosFilePickerProvider {

  constructor(public filePicker: IOSFilePicker) {
  }

  pickFile() {
    console.log("pickFile start:");
    this.filePicker.pickFile().then(uri => {
      console.log(uri)
    }).catch(err => {
      console.log('Error', err)
    });
  }

}
