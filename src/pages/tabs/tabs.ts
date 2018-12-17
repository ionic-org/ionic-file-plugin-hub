import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { IOSPage } from '../ios/ios';
import { AndroidPage } from '../android/android';
import { GithubPage } from '../github/github';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs = [
    {
      root: HomePage,
      tabTitle:"Home",
      tabIcon:"home"
    },
    {
      root: IOSPage,
      tabTitle: "iOS",
      tabIcon: "logo-apple"
    },
    {
      root: AndroidPage,
      tabTitle: "Android",
      tabIcon: "logo-android"
    },
    {
      root: GithubPage,
      tabTitle: "Github",
      tabIcon: "logo-github"
    },
  ]

  constructor() {

  }
}
