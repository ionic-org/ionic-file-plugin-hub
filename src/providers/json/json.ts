import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export const URL =  "assets/json/filePluginHub.json";

@Injectable()
export class JsonProvider implements OnInit{

  list: Array<FilePluginHub_I>;

  constructor(public http: HttpClient){

  }

  ngOnInit() {
    console.log("JsonProvider ngOnInit")
    this.requestForJson();
  }

  requestForJson() {
    console.log("开始请求json");
    return new Observable(observer=>{
      this.http.get(URL).subscribe((data: any) => {
        console.log(data);
        this.list = data;
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
