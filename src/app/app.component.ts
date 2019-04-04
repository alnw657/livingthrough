import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { GethelpPage } from "../pages/gethelp/gethelp";
//import { ContactPage } from "../pages/contact/contact";
import { AwarenessPage } from "../pages/awareness/awareness";
import { FindProfessionalPage } from "../pages/find-professional/find-professional";
//import { SingleItemPage } from "../pages/single-item/single-item";
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './firebase.credentials';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;
  activePage: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.pages = [
        { title: 'Home Page', component: HomePage },
        { title: 'Get Support', component: GethelpPage },
        { title: 'Awareness', component: AwarenessPage },
        //{ title: 'Contact Us', component: ContactPage },
        { title: 'About Us', component: AboutPage }
        //{ title: 'Find Professional', component: FindProfessionalPage}
      ];

      this.activePage = this.pages[0];

    });
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  openPage(page){

    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
