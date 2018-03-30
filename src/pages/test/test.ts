import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';


@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public userData:any;
  public selected:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ble: BLE,private toastCtrl: ToastController) {
    this.userData=JSON.parse(localStorage.getItem('profileData'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  startScan(){
    if(this.selected>0){

    }else{

    }
  }

  gotoPage(){
    this.ble.isEnabled().then((result)=>{
      console.log("isEnabled");
      console.log(result);
      
    }).catch((error)=>{
      console.log("isEnabled error");
      console.log(error)
    })
     
  }

  showBluetoothSettings(){
    this.ble.showBluetoothSettings().then((result)=>{
      console.log("showBluetoothSettings");
      console.log(result);
    }).catch((error)=>{
      console.log("showBluetoothSettings error");
      console.log(error)
    })
  }
  enable(){
    this.ble.enable().then((result)=>{
      console.log("enable");
      console.log(result);
    }).catch((error)=>{
      console.log("enable error");
      console.log(error)
    })
  }
  scan(){
    this.ble.scan([],3).subscribe((result)=>{
      console.log(result);
      console.log("scan");
    },(error)=>{
      console.log("scan error");
      console.log(error);
    })
  }
}
