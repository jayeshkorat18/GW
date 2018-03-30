import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HelpPage } from '../help/help';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userData:any;
  constructor(public navCtrl: NavController) {
    this.userData=JSON.parse(localStorage.getItem('profileData'));
   
  }
  
  gotoPage(){
    this.navCtrl.push(HelpPage)
  }
}
