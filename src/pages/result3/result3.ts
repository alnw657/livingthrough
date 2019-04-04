import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Result3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result3',
  templateUrl: 'result3.html',
})
export class Result3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result3Page');
  }

  closeModal(){
    this.view.dismiss();
  }

}
