import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportingothersPage } from './supportingothers';
import { SafetyplanPage } from "../safetyplan/safetyplan";

@NgModule({
  declarations: [
    SupportingothersPage,
    SafetyplanPage
  ],
  imports: [
    IonicPageModule.forChild(SupportingothersPage),
    SafetyplanPage
  ],
})
export class SupportingothersPageModule {}
