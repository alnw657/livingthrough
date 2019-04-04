import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SupportingmyselfPage } from "../supportingmyself/supportingmyself";
import { SupportingothersPage } from "../supportingothers/supportingothers";
/**
 * Generated class for the GethelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gethelp',
  templateUrl: 'gethelp.html',
})
export class GethelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GethelpPage');
  }
  openSupportingMyselfPage(){
    this.navCtrl.push(SupportingmyselfPage);
  }
  openSupportingOthersPage() {
    this.navCtrl.push(SupportingothersPage);
  }


}
