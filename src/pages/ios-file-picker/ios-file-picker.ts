import { IosFilePickerProvider } from './../../providers/other/ios-file-picker';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IosFilePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ios-file-picker',
  templateUrl: 'ios-file-picker.html',
})
export class IosFilePickerPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private picker:IosFilePickerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IosFilePickerPage');
  }

  clickPickFile() {
    this.picker.pickFile();
  }

}
