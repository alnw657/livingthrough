import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { from } from 'rxjs/observable/from';
/**
 * Generated class for the Question3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question3',
  templateUrl: 'question3.html',
})
export class Question3Page {

  questionThree;
  result = {
    result:0
  }
  answer = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modal:ModalController,
    private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('result'));

    this.result = this.navParams.get('result');
  }

  openResultModal() {
    
    //this.result = this.navParams.get('result');

    if(this.questionThree === '0') {

      this.answer = 2;

      if(this.result.result === 3){
        let result3Modal = this.modal.create('Result3Page');

        result3Modal.present();

      }

      else if(this.answer > this.result.result){
        
        let result2Modal = this.modal.create('Result2Page');
        
        result2Modal.present();
      } 
      
      else if(this.answer === this.result.result){
        
        let result2Modal = this.modal.create('Result2Page');
        
        result2Modal.present();
      }
      

    }
    
    else if(this.questionThree === '1') {

      let result3Modal = this.modal.create('Result3Page');
      
      result3Modal.present();
      
    }

    else if(this.questionThree === '2'){
      console.log(this.navParams.get('result'));

      if (this.result.result === 0){
        let resultModal = this.modal.create('ResultPage');
       
        resultModal.present();

      }
      else if (this.result.result === 1) {
        let result1Modal = this.modal.create('Result1Page');

        result1Modal.present();
      }
      else if(this.result.result === 2){
        let result2Modal = this.modal.create('Result2Page');

        result2Modal.present();
      }

    }
    this.view.dismiss();

    let question3 = this.questionThree;
    firebase.database().ref('question03').push(question3);

  }

}
