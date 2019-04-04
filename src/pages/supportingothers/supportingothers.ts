import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafetyplanPage } from "../safetyplan/safetyplan";
import { FindProfessionalPage } from "../find-professional/find-professional";

/**
 * Generated class for the SupportingothersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supportingothers',
  templateUrl: 'supportingothers.html',
})
export class SupportingothersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportingothersPage');
  }
  openSafetyPlanPage() {
    this.navCtrl.push(SafetyplanPage);
  }
  openFindProfessionalPage() {
    this.navCtrl.push(FindProfessionalPage);
  }

}
