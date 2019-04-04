import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, ModalController } from 'ionic-angular';
import { SurveyPage } from './survey';

@NgModule({
  declarations: [
    SurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyPage),
  ],
})
export class SurveyPageModule {

  question01: number = 0;

  onChange(ev: any) {
    console.log('Changed', ev);
  }
}
