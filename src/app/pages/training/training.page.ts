import { Exercise } from 'src/app/interfaces/exercise.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTrainings from '../../services/trainings/trainings.reducer';
import * as fromExercise from '../../services/exercises/exercises.reducer';

@Component({
  selector: 'app-training',
  templateUrl: 'training.page.html',
  styleUrls: ['training.page.scss'],
})
export class TrainingPage {
  /**
   * Lista de exercicios cadastrados
   */
  public exercises$: Observable<Exercise[]>;

  /**
   * Exercicio atualmente selecionado para ser realizado.
   */
  public selectedExercise: Exercise;

  constructor(private _store: Store<fromTrainings.State>) {}

  /**
   * Ao inicializar o componente, dou um select no store passando o seletor de getExercises, que vai me
   * retornar um observavel contendo um array de Exercise
   */
  ngOnInit(): void {
    this.exercises$ = this._store.select(fromExercise.getExercises);
  }
}
