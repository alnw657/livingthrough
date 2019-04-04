import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { from } from 'rxjs/observable/from';
/**
 * Generated class for the Question2_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question2-1',
  templateUrl: 'question2-1.html',
})
export class Question2_1Page {

  questionTwoDotOne;
  result = {
    result : 0
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modal:ModalController,
    private view:ViewController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question2_1Page');
    
    console.log(this.navParams.get('result'));

    this.result = this.navParams.get('result');
  }

  openNextQuestion() {

    if(this.questionTwoDotOne === '1'){
      this.result =  {
        result : 2
      };
      
      let twoDotOneResult = this.result;
      
      let question2_2 = this.modal.create('Question2_2Page', { result: twoDotOneResult });

      question2_2.present();

      
    }
    else  {
      let twoDotOneResult = this.result;
      let question2_2 = this.modal.create('Question2_2Page', { result: twoDotOneResult });

      question2_2.present();
    }
    this.view.dismiss();

    let question21 = this.questionTwoDotOne;
    firebase.database().ref('question02_1').push(question21);
  }

}
