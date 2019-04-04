import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindProfessionalPage } from './find-professional';

@NgModule({
  declarations: [
    FindProfessionalPage,
  ],
  imports: [
    IonicPageModule.forChild(FindProfessionalPage),
  ],
})
export class FindProfessionalPageModule {}
