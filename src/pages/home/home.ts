import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GethelpPage } from "../gethelp/gethelp";
import { DonatePage } from "../donate/donate";
import { AwarenessPage } from "../awareness/awareness";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
}

openGetSupportPage(){
  this.navCtrl.push(GethelpPage);
}
openAwarenessPage(){
  this.navCtrl.push(AwarenessPage);
}
openAboutPage(){
  this.navCtrl.push(AboutPage);
}
}
