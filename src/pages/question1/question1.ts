import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import { from } from 'rxjs/observable/from';
/**
 * Generated class for the Question1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question1',
  templateUrl: 'question1.html',
})

export class Question1Page {
 
surveyanswers={
  question1:'', 
  question2:'',
  question2_1:'',
  question2_2:'',
  
  question2_3:'',
  question3:''
}

//   question01;
// question02;
//   questionTwoDotOne;
//   questionTwoDotTwo;
//   questionTwoDotThree;
//   questionThree;
  
  result = {
    result : 0
  };
  answer = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modal:ModalController,
    private view:ViewController) {

     

  }

 /* add(Question01){
    firebase.database().ref('question01').push(Question01);
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question1Page');


 


  }


  


 

  openResultModal() {
  /*  
    if(this.question01 === '1'){
      this.result = {
        result : 1

      };
     
    }
    
    // let question1 = this.question01;
    // let surveyResult = this.result;
    
    // firebase.database().ref('question01').push(question1);
    // let question2 = this.modal.create('Question2Page', { result: surveyResult });

    else if(this.question02 === '0'){
      
      let twoResult = {
        result : this.result
      };

      // let question2_1 = this.modal.create('Question2_1Page', { result: twoResult });

      // question2_1.present();
    }

    else if(this.question02 === '1'){
      this.result = {
        result : 1
      }
      
      let twoResult = this.result;

      // let question2_1 = this.modal.create('Question2_1Page', { result: twoResult });

      // question2_1.present();
    }
    else if (this.question02 === '2'){
      
      let twoResult = this.result;
  
      // let question3 = this.modal.create('Question3Page', { result: twoResult });
  
     
      // question3.present();


    }
 
    


    //this.result = this.navParams.get('result');
*/
  //this.result = this.navParams.get('result');

///Question 1
  if(this.surveyanswers.question1 === '1'){
    this.result = {
      result : 1

    };
    // let surveyResult = this.result;
  }
  
  
  
  
  // firebase.database().ref('question01').push(question1);
  // let question2 = this.modal.create('Question2Page', { result: surveyResult });
//Question 2
   if(this.surveyanswers.question2  === '0'){
    
    let twoResult = {
      result : this.result
    };

    // let question2_1 = this.modal.create('Question2_1Page', { result: twoResult });

    // question2_1.present();
  }

  else if(this.surveyanswers.question2  === '1'){
    this.result = {
      result : 1
    }
    
    let twoResult = this.result;

    // let question2_1 = this.modal.create('Question2_1Page', { result: twoResult });

    // question2_1.present();
  }
  else if (this.surveyanswers.question2 === '2'){
    
    let twoResult = this.result;

    // let question3 = this.modal.create('Question3Page', { result: twoResult });

   
    // question3.present();


  }



//Question 2.1
if(this.surveyanswers.question2_1 === '1'){
  this.result =  {
    result : 2
  };
  
  let twoDotOneResult = this.result;
  
  // let question2_2 = this.modal.create('Question2_2Page', { result: twoDotOneResult });

  // question2_2.present();

  
}
else  {
  let twoDotOneResult = this.result;
  // let question2_2 = this.modal.create('Question2_2Page', { result: twoDotOneResult });

  // question2_2.present();
}


//Question 2.2
if(this.surveyanswers.question2_2 === '0') {
  this.result = {
    result : 2
  };
  
  let twoDotTwoResult = this.result;
  // let question2_3 = this.modal.create('Question2_3Page', { result: twoDotTwoResult });

  // question2_3.present();

}
else if(this.surveyanswers.question2_2 === '1') {
  this.result = {
    result : 3
  };
  
  let twoDotTwoResult = this.result;
  // let question2_3 = this.modal.create('Question2_3Page', { result: twoDotTwoResult });

  // question2_3.present();
  
}
else {

  let twoDotTwoResult = this.result;
  // let question2_3 = this.modal.create('Question2_3Page', { result: twoDotTwoResult });

  // question2_3.present();

}

//Question 2.3
if(this.surveyanswers.question2_3 === '0') {

  this.answer = 2;

  if(this.result.result === 3){

    let twoDotThreeResult = {
      result : 3
    };
    // let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

    // question3.present();

  }

  else if (this.answer >= this.result.result){

    
    let twoDotThreeResult = {
      result : 2
    };
    // let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

    // question3.present();
  }

}

else if(this.surveyanswers.question2_3 === '1') {
  
  let twoDotThreeResult = {
    result : 3
  };
  // let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

  // question3.present();
  
}
else {

  let twoDotThreeResult = this.result;

  // let question3 = this.modal.create('Question3Page', { result: twoDotThreeResult });

  // question3.present();

}


////Question 3

   if(this.surveyanswers.question3 === '0') {

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
  
  else if(this.surveyanswers.question3 === '1') {

    let result3Modal = this.modal.create('Result3Page');
    
    result3Modal.present();
    
  }

  else if(this.surveyanswers.question3 === '2'){
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


    
    firebase.database().ref('surveyanswers').push(
     this.surveyanswers);
    

  }


}
