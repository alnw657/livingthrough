import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { from } from 'rxjs/observable/from';
/**
 * Generated class for the Question2_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question2-2',
  templateUrl: 'question2-2.html',
})
export class Question2_2Page {

  questionTwoDotTwo;
  result = {
    result : 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modal:ModalController,
    private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('result'));

    this.result = this.navParams.get('result');
  }

  openNextQuestion() {

    if(this.questionTwoDotTwo === '0') {
      this.result = {
        result : 2
      };
      
      let twoDotTwoResult = this.result;
      let question2_3 = this.modal.create('Question2_3Page', { result: twoDotTwoResult });

      question2_3.present();

    }
    else if(this.questionTwoDotTwo === '1') {
      this.result = {
        result : 3
      };
      
      let twoDotTwoResult = this.result;
      let question2_3 = this.modal.create('Question2_3Page', { result: twoDotTwoResult });

      question2_3.present();
      
    }
    else {

      let twoDotTwoResult = this.result;
      let question2_3 = this.modal.create('Question2_3Page', { result: twoDotTwoResult });

      question2_3.present();

    }
    this.view.dismiss();

    let question22 = this.questionTwoDotTwo;
    firebase.database().ref('question02_2').push(question22);
  }

}
