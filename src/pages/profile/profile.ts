import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {HomePage} from '../home/home'

@Component({
  selector: 'profile-home',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  register: FormGroup;
  submitAttempt: any = false;
  isProfile:boolean=false;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,private toastCtrl: ToastController) {
    let profileData;
    if(Boolean(localStorage.getItem('profileData'))){
      profileData=JSON.parse(localStorage.getItem('profileData'));
      this.isProfile=true;
    }
    this.register = this.formBuilder.group({
      name: [Boolean(profileData)?profileData.name:'', Validators.compose([Validators.required, Validators.maxLength(50)])],
      age: [Boolean(profileData)?profileData.age:'', Validators.compose([Validators.required, Validators.maxLength(3)])],
      height: [Boolean(profileData)?profileData.height:'', Validators.compose([Validators.required, Validators.maxLength(3)])],
      weight: [Boolean(profileData)?profileData.weight:'', Validators.compose([Validators.required, Validators.maxLength(3)])],
      type:[Boolean(profileData)?profileData.type:'1'],
      dailyvalue:[Boolean(profileData)?profileData.dailyvalue:''],
      isMadication: [Boolean(profileData)?profileData.isMadication:false],
      sulfonylureas:[Boolean(profileData)?profileData.sulfonylureas:false],
      biguanides:[Boolean(profileData)?profileData.biguanides:false],
      aglucosidese:[Boolean(profileData)?profileData.aglucosidese:false], 
      injection:[Boolean(profileData)?profileData.injection:false]
  })
  }

  resetBox(){
    this.register.controls['sulfonylureas'].setValue(false);
    this.register.controls['biguanides'].setValue(false);
    this.register.controls['aglucosidese'].setValue(false);
    this.register.controls['injection'].setValue(false);
  }

  registerUser(form){
    this.submitAttempt = true;
    if (this.register.valid){
      if(form.type!=1){
        if(form.dailyvalue >= 75 && form.dailyvalue <= 200){
          console.log(form);
          localStorage.setItem('profileData',JSON.stringify(form))
          this.goHome()
        }else{
          let msg=Boolean(form.dailyvalue)?'Please enter average daily glucose value between 75 and 200':'Please enter average daily glucose value';
          this.showTost(msg);
        }
      }else{
        //console.log(form);
        localStorage.setItem('profileData',JSON.stringify(form));
        this.showTost('Your profile successfully updated');
        this.goHome()
      }
    }

  }
  goHome(){
    if(!this.isProfile){
      this.navCtrl.setRoot(HomePage);
    }
  }
  showTost(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
