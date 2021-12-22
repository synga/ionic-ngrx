import { Exercise } from 'src/app/interfaces/exercise.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { take } from 'rxjs/operators';

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

  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this.form.patchValue(this.exercise);
  }

  async checkFormAndEmit() {
    if (this.form.valid) {
      this._auth
        .getUserId()
        .pipe(take(1))
        .subscribe((userId) => {
          const exercise: Exercise = {
            ...this.form.value,
            userId,
          };
          this.exerciseData.emit(exercise);
        });
    }
  }
}
