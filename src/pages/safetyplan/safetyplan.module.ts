import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafetyplanPage } from './safetyplan';
import { EmailProvider } from '../../providers/email/email';
@NgModule({
  declarations: [
    SafetyplanPage,
  ],
  imports: [
    IonicPageModule.forChild(SafetyplanPage),
  ],
  providers: [
    EmailProvider
  ]
})
export class SafetyplanPageModule {}
