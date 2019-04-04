import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { from } from 'rxjs/observable/from';

/**
 * Generated class for the Question2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question2',
  templateUrl: 'question2.html',
})
export class Question2Page {
 
  question02;
  result = {
    result : 0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modal:ModalController,
    private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question2Page');

    console.log(this.navParams.get('result'));

    this.result = this.navParams.get('result');
  }

  openNextQuestion() {

    if(this.question02 === '0'){
      
      let twoResult = {
        result : this.result
      };

      let question2_1 = this.modal.create('Question2_1Page', { result: twoResult });

      question2_1.present();
    }

    else if(this.question02 === '1'){
      this.result = {
        result : 1
      }
      
      let twoResult = this.result;

      let question2_1 = this.modal.create('Question2_1Page', { result: twoResult });

      question2_1.present();
    }
    else if (this.question02 === '2'){
      
      let twoResult = this.result;
  
      let question3 = this.modal.create('Question3Page', { result: twoResult });
  
     
      question3.present();


    }
    
    this.view.dismiss();

  
 let question2 = this.question02;
 firebase.database().ref('question02').push(question2);

  }

}
