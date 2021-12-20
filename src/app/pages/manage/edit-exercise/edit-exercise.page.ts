import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Exercise } from 'src/app/interfaces/exercise.model';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.page.html',
  styleUrls: ['./edit-exercise.page.scss'],
})
export class EditExercisePage implements OnInit, OnDestroy {
  public exercise: Exercise;
  public exerciseUID: string;

  constructor(
    private _exercises: ExercisesService,
    private _location: Location
  ) {}

  ngOnInit() {
    this._exercises
      .getEditingExercise()
      .pipe(take(1))
      .subscribe(({ id, ...exercise }) => {
        this.exercise = exercise;
        this.exerciseUID = id;
      });
  }

  ngOnDestroy(): void {
    this._exercises.storeEditingExercise(null);
  }

  async updateExercise(exercise: Exercise) {
    await this._exercises.updateExercise(this.exerciseUID, exercise);
    this._location.back();
  }
}
