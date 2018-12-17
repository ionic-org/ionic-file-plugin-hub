import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IosFilePickerPage } from './ios-file-picker';

@NgModule({
  declarations: [
    IosFilePickerPage,
  ],
  imports: [
    IonicPageModule.forChild(IosFilePickerPage),
  ],
})
export class IosFilePickerPageModule {}
