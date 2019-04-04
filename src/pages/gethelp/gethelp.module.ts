import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GethelpPage } from './gethelp';
import { SupportingmyselfPage } from "../supportingmyself/supportingmyself";
import { SupportingothersPage } from "../supportingothers/supportingothers";

@NgModule({
  declarations: [
    GethelpPage,
    SupportingmyselfPage,
    SupportingothersPage
  ],
  imports: [
    IonicPageModule.forChild(GethelpPage),
  ],
})
export class GethelpPageModule {
  
}
