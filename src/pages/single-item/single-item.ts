import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';


/**
 * Generated class for the SingleItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html',
})
export class SingleItemPage {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public locations: LocationsProvider) {
    this.value = navParams.get('location');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleItemPage');
  }

}
