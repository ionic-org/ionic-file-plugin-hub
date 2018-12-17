import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export const URL_Plugin =  "assets/json/filePluginHub.json";
export const URL_Plugin_ios = "assets/json/iosPluginHub.json";
export const URL_Plugin_android = "assets/json/androidPluginHub.json";
export const URL_MIME = "assets/json/mime.json";

@Injectable()
export class JsonProvider implements OnInit{
  constructor(public http: HttpClient){

  }

  ngOnInit() {

  }

  requestForJson(url:string) {
    console.log("开始请求json");
    return new Observable(observer=>{
      this.http.get(url).subscribe((data: any) => {
        console.log(data);
        observer.next(data);
      }, error => {
        console.error(error);
          observer.error(error);
      });
    })

  }

}

export interface FilePluginHub_I {
  name: string;
  ionic: string;
  author: string;
  platforms: string[];
  function: Function_I;
  mark: string[];
}

export interface Function_I {
  file: null;
  image: string[] | null;
  video: string[] | null;
  audio: string[] | null;
}
