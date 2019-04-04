import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportingmyselfPage } from './supportingmyself';
import { SafetyplanPage } from "../safetyplan/safetyplan";
import { SurveyPage } from "../survey/survey";


@NgModule({
  declarations: [
    SupportingmyselfPage,
    SafetyplanPage,
    SurveyPage
  ],
  imports: [
    IonicPageModule.forChild(SupportingmyselfPage),
    SafetyplanPage,
    SurveyPage
  ],
})
export class SupportingmyselfPageModule {}
