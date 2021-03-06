import { Component } from '@angular/core';
import { IonicPage, NavParams, Item } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailProvider } from '../../providers/email/email';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmailComposer } from '@ionic-native/email-composer';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';

import { file } from 'babel-types';
import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';

import { HttpModule } from '@angular/http'; 
import {Request,RequestMethod} from "@angular/http";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';



// Required for side-effects
require("firebase/functions")

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SafetyplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safetyplan',
  templateUrl: 'safetyplan.html',
})
export class SafetyplanPage {
 
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;

  immediate1='';
  immediate2='';
  immediate3='';
  immediate4='';
  immediate5='';
  future1='';
  future2='';
  future3='';
  future4='';
  future5='';
  future6='';
  future7='';
  future8='';
  future9='';
  future10='';
  future11='';
  future12='';
  future13='';
  to='';

    safetyplan={
     
      future1:"",
      future2:"",
      future3:"",
      future4:"",
      future5:"",
      future6:"",
      future7:"",
      future8:"",
      future9:"",
      future10:"",
      future11:"",
      future12:"",
      future13:""

    }
   /**
    * @public
    * Property to assign a FormGroup object to
    */

  //public form  : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    http: Http,
  
    ) {
    this.http = http;
   
    }


    send() {
  
      var functions = firebase.functions();
      

      var sendMail = firebase.functions().httpsCallable('sendMail');
      sendMail().then(function(result){
        
      })
       
//    

      }


    
      add(Safetyplan){
        firebase.database().ref('safetyplan').push(Safetyplan);
      }

      
      
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafetyplanPage');
  }/*

  sendMessage() : void
   {
      // Retrieve the validated form fields
      let to 	    	: string		= this.form.controls["to"].value,
          cc 		    : string		= this.form.controls["cc"].value,
          bcc 	  	: string		= this.form.controls["cc"].value,
          subject 	: string		= this.form.controls["subject"].value,
          message 	: string		= this.form.controls["message"].value;
          
          this._EMAIL.sendEmail(to, cc, bcc, subject, message);
   }*/
}
