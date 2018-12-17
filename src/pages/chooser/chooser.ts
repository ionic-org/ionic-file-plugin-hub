import { ChooserProvider } from './../../providers/other/chooser';
import { JsonProvider, URL_MIME } from './../../providers/json/json';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chooser',
  templateUrl: 'chooser.html',
})
export class ChooserPage {

  list:Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jsonProvider:JsonProvider,
    private chooserProvider:ChooserProvider) {
  }

  ionViewDidLoad() {

  }

  requestForMIME() {
    this.jsonProvider.requestForJson(URL_MIME).subscribe((data: any) => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          this.list.push({
            key:key,
            value:value
          })
        }
      }
    })
  }

  clickItem(index) {
    let item = this.list[index];
    this.chooserProvider.getFile(item.value);
  }

}
