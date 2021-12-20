import { Exercise } from 'src/app/interfaces/exercise.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss'],
})
export class ExerciseFormComponent implements OnInit {
  /**
   * EventEmitter com os dados do formulário de exercicio editado/criado
   */
  @Output() exerciseData: EventEmitter<Exercise> = new EventEmitter<Exercise>();

  /**
   * Ddos de um exercicio para ser editado.
   */
  @Input() exercise: Exercise = null;

  /**
   * Form para a criação de um novo exercicio
   */
  public form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    type: new FormControl('duration', Validators.required),
    setQuantity: new FormControl(null, Validators.required),
    calories: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit() {
    this.form.patchValue(this.exercise);
  }

  checkFormAndEmit() {
    if (this.form.valid) {
      this.exerciseData.emit(this.form.value as Exercise);
    }
  }
}
