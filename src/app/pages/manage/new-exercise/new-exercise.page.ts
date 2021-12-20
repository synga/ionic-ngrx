import { Exercise } from './../../../interfaces/exercise.model';
import { Component } from '@angular/core';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.page.html',
  styleUrls: ['./new-exercise.page.scss'],
})
export class NewExercisePage {
  constructor(
    private _exercises: ExercisesService,
    private _location: Location
  ) {}

  /**
   * Salva um novo exercicio e reseta o
   */
  async saveNewExercise(exercise: Exercise) {
    await this._exercises.saveNewExercise(exercise);
    this._location.back();
  }
}
