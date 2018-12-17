import { FilePluginHub_I, JsonProvider, URL_Plugin_ios } from './../../providers/json/json';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ios',
  templateUrl: 'ios.html'
})
export class IOSPage {

  list: Array<FilePluginHub_I>;

  constructor(
    public navCtrl: NavController,
    private jsonProvider:JsonProvider) {

  }

  ionViewDidLoad() {
    this.jsonProvider.requestForJson(URL_Plugin_ios).subscribe((data: any) => {
      this.list = data;
    })
  }

  clickPlugin(index) {
    let plugin = this.list[index];
    let pluginName = plugin.name;
    let page = pluginName.replace(/\s/g, "") + "Page";
    this.navCtrl.push(page);
  }

}
