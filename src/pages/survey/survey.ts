import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modal:ModalController
    ) {
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  openNextQuestion() {

    const question1 = this.modal.create('Question1Page');

    question1.present();

  }

}
