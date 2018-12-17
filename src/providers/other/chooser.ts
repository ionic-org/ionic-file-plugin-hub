import { Chooser, ChooserResult } from '@ionic-native/chooser';
import { Injectable } from '@angular/core';

@Injectable()
export class ChooserProvider {

  constructor(private chooser: Chooser) {

  }

  getFile(accept) {
    this.chooser.getFile(accept).then((data: ChooserResult) => {
      console.log(JSON.stringify(data));
    }, err => {
      console.error(err);
    })
  }

}
