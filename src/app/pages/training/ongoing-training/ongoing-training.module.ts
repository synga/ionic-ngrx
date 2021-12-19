import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OngoingTrainingPageRoutingModule } from './ongoing-training-routing.module';

import { OngoingTrainingPage } from './ongoing-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OngoingTrainingPageRoutingModule
  ],
  declarations: [OngoingTrainingPage]
})
export class OngoingTrainingPageModule {}
