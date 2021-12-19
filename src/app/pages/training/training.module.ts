import { StoreModule } from '@ngrx/store';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrainingPage } from './training.page';

import { TrainingPageRoutingModule } from './training-routing.module';
import { trainingReducer } from 'src/app/services/trainings/trainings.reducer';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TrainingPageRoutingModule,
    StoreModule.forFeature('trainings', trainingReducer),
  ],
  declarations: [TrainingPage],
})
export class TrainingPageModule {}
