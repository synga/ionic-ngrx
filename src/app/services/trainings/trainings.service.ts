import { SetCurrentTraining } from 'src/app/services/trainings/trainings.actions';
import { Training } from './../../interfaces/training.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Exercise } from 'src/app/interfaces/exercise.model';
import * as fromTrainings from './trainings.reducer';

@Injectable({
  providedIn: 'root',
})
export class TrainigsService {
  constructor(private _store: Store<fromTrainings.State>) {}

  /**
   * Cria um novo treino no store.
   */
  public async startNewTraining(exercise: Exercise) {
    const training: Training = {
      date: new Date(),
      exercise,
      status: 'started',
    };

    return this._store.dispatch(SetCurrentTraining({ payload: training }));
  }

  /**
   * Cancela o treino atualmente em andamento, salva ele como cancelado no firebase e retorna para a
   * pagina de treino.
   */
  public async cancelCurrentTraining() {
    // salvar no firebase
    // dar o dispatch
    // navegar para o inicio
    this._store.dispatch(SetCurrentTraining({ payload: null }));
  }

  /**
   * Retorna o treino atualmente em andamento.
   */
  public getCurrentOngoingTraining() {
    return this._store.select(fromTrainings.getCurrentTraining);
  }
}
