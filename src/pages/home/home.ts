import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private menu: string = 'home';
  private tabs: Array<string> = [
    'home',
    'experience',
    'projects',
    'contact'
  ];

  iterator: number = 0;

  constructor() { }

  swipeTabs(e: any): void {
    if (e.direction == 2) {
      let i = this.iterator == this.tabs.length - 1 ? -1 : this.iterator;
      this.iterator = i;
      this.menu = this.tabs[++this.iterator];
    }
    if (e.direction == 4) {
      let i = this.iterator == 0 ? this.tabs.length : this.iterator;
      this.iterator = i;
      this.menu = this.tabs[--this.iterator];
    }
  }

  updateTab(): void {
    this.iterator = this.tabs.indexOf(this.menu);
  }

}
