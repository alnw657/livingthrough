import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(private view: ViewController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    const result = this.navParams.get('result');
    console.log(result);
  }

  closeModal(){
    this.view.dismiss();
  }

}
