import { Exercise } from './../../../interfaces/exercise.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.page.html',
  styleUrls: ['./new-exercise.page.scss'],
})
export class NewExercisePage implements OnInit {
  /**
   * Form para a criação de um novo exercicio
   */
  public form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    exerciseType: new FormControl('duration', Validators.required),
    setQuantity: new FormControl(null, Validators.required),
    calories: new FormControl(null, Validators.required),
  });

  constructor(private _exercises: ExercisesService) {}

  ngOnInit() {}

  /**
   * Salva um novo exercicio e reseta o
   */
  saveNewExercise() {
    const formValue: Exercise = this.form.value;
    this._exercises.saveNewExercise(formValue).then(() => {
      this.form.reset({
        name: null,
        exerciseType: 'duration',
        setQuantity: null,
        calories: null,
      });
    });
  }
}
