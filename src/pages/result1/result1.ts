import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Result1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result1',
  templateUrl: 'result1.html',
})
export class Result1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result1Page');
  }

  closeModal(){
    this.view.dismiss();
  }

}
