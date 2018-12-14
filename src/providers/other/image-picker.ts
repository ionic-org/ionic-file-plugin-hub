import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ImagePickerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagePickerProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ImagePickerProvider Provider');
  }

}
