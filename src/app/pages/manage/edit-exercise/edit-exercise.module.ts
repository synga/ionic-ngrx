import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditExercisePageRoutingModule } from './edit-exercise-routing.module';

import { EditExercisePage } from './edit-exercise.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditExercisePageRoutingModule,
  ],
  declarations: [EditExercisePage],
})
export class EditExercisePageModule {}
