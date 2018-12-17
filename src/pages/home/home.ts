import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JsonProvider, FilePluginHub_I, URL_Plugin } from './../../providers/json/json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: Array<FilePluginHub_I>;

  constructor(
    public navCtrl: NavController,
    public jsonProvider: JsonProvider) {

  }

  getPlatformIcon(platform: string) {
    switch (platform) {
      case 'iOS':
        return 'logo-apple';
      case 'Android':
        return 'logo-android';
      case 'Browser':
        return 'logo-chrome';
      case 'Windows':
        return 'logo-windows';
      default:
        break;
    }
  }

  ionViewDidLoad() {
    this.jsonProvider.requestForJson(URL_Plugin).subscribe((data: any) => {
      this.list = data;
    })
  }

  clickPlugin(index) {
    let plugin = this.list[index];
    let pluginName = plugin.name;
    let page = pluginName.replace(/\s/,"") + "Page";
    this.navCtrl.push(page);
  }
}
