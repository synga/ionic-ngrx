import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewExercisePageRoutingModule } from './new-exercise-routing.module';

import { NewExercisePage } from './new-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewExercisePageRoutingModule,
  ],
  declarations: [NewExercisePage],
})
export class NewExercisePageModule {}
