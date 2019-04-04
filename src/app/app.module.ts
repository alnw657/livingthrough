import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../pages/home/home';
import { GethelpPage } from "../pages/gethelp/gethelp";
import { ContactPage } from "../pages/contact/contact";
import { AwarenessPage } from "../pages/awareness/awareness";
import { AboutPage } from "../pages/about/about";
import { MapPage } from "../pages/map/map";
import { ListPage } from "../pages/list/list";
import { FindProfessionalPage } from "../pages/find-professional/find-professional";
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { DonatePage } from "../pages/donate/donate";
import { SupportingmyselfPage } from "../pages/supportingmyself/supportingmyself";
import { SafetyplanPage } from "../pages/safetyplan/safetyplan";
import { SupportingothersPage } from "../pages/supportingothers/supportingothers";
import { SurveyPage } from "../pages/survey/survey";
import { EmailProvider } from '../providers/email/email';
import { SingleItemPage } from '../pages/single-item/single-item';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { from } from 'rxjs/observable/from';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
// declare var require: any;
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GethelpPage,
    ContactPage,
    AwarenessPage,
    AboutPage,
    MapPage,
    ListPage,
    FindProfessionalPage,
    DonatePage,
    SupportingmyselfPage,
    SafetyplanPage,
    SupportingothersPage,
    SurveyPage,
    SingleItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GethelpPage,
    ContactPage,
    AwarenessPage,
    AboutPage,
    MapPage,
    ListPage,
    FindProfessionalPage,
    DonatePage,
    SupportingmyselfPage,
    SafetyplanPage,
    SupportingothersPage,
    SurveyPage,
    SingleItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider,
    Network,
    Geolocation,
    EmailProvider,
    InAppBrowser
  ]
})
export class AppModule {}
