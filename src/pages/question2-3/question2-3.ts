import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { from } from 'rxjs/observable/from';
/**
 * Generated class for the Question2_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question2-3',
  templateUrl: 'question2-3.html',
})
export class Question2_3Page {

  questionTwoDotThree;
  result = {
    result : 0
  };
  answer = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modal:ModalController,
    private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('result'));

    this.result = this.navParams.get('result');
  }

  openNextQuestion() {


    if(this.questionTwoDotThree === '0') {

      this.answer = 2;

      if(this.result.result === 3){

        let twoDotThreeResult = {
          result : 3
        };
        let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

        question3.present();

      }

      else if (this.answer >= this.result.result){

        
        let twoDotThreeResult = {
          result : 2
        };
        let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

        question3.present();
      }

    }

    else if(this.questionTwoDotThree === '1') {
      
      let twoDotThreeResult = {
        result : 3
      };
      let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

      question3.present();
      
    }
    else {

      let twoDotThreeResult = this.result;

      let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

      question3.present();

    }

    this.view.dismiss();

    let question23 = this.questionTwoDotThree;
    firebase.database().ref('question02_3').push(question23);

  }

}
