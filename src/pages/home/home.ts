import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HelpPage } from '../help/help';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(){
    this.navCtrl.push(HelpPage)
  }
}
