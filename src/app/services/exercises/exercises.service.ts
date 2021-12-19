import { Exercise } from './../../interfaces/exercise.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ComponentsService } from '../components/components.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromExercise from './exercises.reducer';
import { SetExercises } from './exercises.actions';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  constructor(
    private db: AngularFirestore,
    private _components: ComponentsService,
    private _store: Store<fromExercise.State>
  ) {}

  /**
   * Vai criar o observavel do próprio firebase, e a cada novo exercicio ou exercicio alterado, vai
   * atualizar os exercicios no store do NGRX
   */
  loadExercises(): void {
    this.db
      .collection('exercises')
      .snapshotChanges()
      .pipe(map(this.mapFirestoreExerciseArray))
      .subscribe((exercises: Exercise[]) => {
        // dispatch é o que salva os dados no store disparando uma ação que recebe um payload.
        this._store.dispatch(SetExercises({ payload: exercises }));
      });
  }

  async saveNewExercise(exercise: Exercise) {
    try {
      await this._components.startLoading();
      await this.db.collection('exercises').add(exercise);
      const successAlert = await this._components.createSimpleAlertMessage({
        header: 'Exercicio salvo com sucesso',
      });
      await this._components.stopLoading();
      return successAlert.present();
    } catch (error) {
      console.log('error', error);
      const errorAlert = await this._components.createSimpleAlertMessage({
        header: 'Exercicio salvo com sucesso',
      });
      await this._components.stopLoading();
      return errorAlert.present();
    }
  }

  /**
   * Retorna o array de exercicios como um observable.
   * Dou um select no store passando o seletor de getExercises
   */
  getExercises() {
    return this._store.select(fromExercise.getExercises);
  }

  /**
   * Passa pelos itens existentes no Array de documentos retornado pelo firebase
   * e devolve um array de exercicios
   */
  private mapFirestoreExerciseArray(docArray): Exercise[] {
    return docArray.map((doc) => ({
      id: doc.payload.doc.id,
      ...(doc.payload.doc.data() as Exercise),
    }));
  }
}
