import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewExercisePageRoutingModule } from './new-exercise-routing.module';

import { NewExercisePage } from './new-exercise.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ExerciseFormComponent } from 'src/app/components/exercise-form/exercise-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    NewExercisePageRoutingModule,
  ],
  declarations: [NewExercisePage],
})
export class NewExercisePageModule {}
