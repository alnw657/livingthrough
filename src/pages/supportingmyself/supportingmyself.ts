import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafetyplanPage } from "../safetyplan/safetyplan";
import { SurveyPage } from "../survey/survey";
import { FindProfessionalPage } from "../find-professional/find-professional";

/**
 * Generated class for the SupportingmyselfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supportingmyself',
  templateUrl: 'supportingmyself.html',
})
export class SupportingmyselfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportingmyselfPage');
  }
  openSafetyPlanPage(){
    this.navCtrl.push(SafetyplanPage);
  }
  openSurveyPage(){
    this.navCtrl.push(SurveyPage);
  }
  openFindProfessionalPage() {
    this.navCtrl.push(FindProfessionalPage);
  }

}
