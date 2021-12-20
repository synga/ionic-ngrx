import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [ExerciseFormComponent];

@NgModule({
  declarations: components,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  exports: components,
})
export class ComponentsModule {}
