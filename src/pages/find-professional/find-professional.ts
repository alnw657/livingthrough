import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from  '../map/map';
import { ListPage } from '../list/list';


@IonicPage()
@Component({
  selector: 'page-find-professional',
  templateUrl: 'find-professional.html',
})
export class FindProfessionalPage {

  tab1Root: any = MapPage;
  tab2Root: any = ListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindProfessionalPage');
  }

}
