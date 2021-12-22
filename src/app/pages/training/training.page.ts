import { Exercise } from 'src/app/interfaces/exercise.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTrainings from '../../services/trainings/trainings.reducer';
import * as fromExercise from '../../services/exercises/exercises.reducer';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { TrainigsService } from 'src/app/services/trainings/trainings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-training',
  templateUrl: 'training.page.html',
  styleUrls: ['training.page.scss'],
})
export class TrainingPage {
  public exerciseTypeMap: Map<string, string> = new Map([
    ['duration', '(DUR)'],
    ['repetition', '(REP)'],
  ]);

  /**
   * Lista de exercicios cadastrados
   */
  public exercises$: Observable<Exercise[]>;

  /**
   * Exercicio atualmente selecionado para ser realizado.
   */
  public selectedExercise: Exercise;

  constructor(
    private _exercises: ExercisesService,
    private _trainings: TrainigsService,
    private _router: Router,
    private route: ActivatedRoute,
    private _auth: AuthService
  ) {}

  /**
   * Ao inicializar o componente, dou um select no store passando o seletor de getExercises, que vai me
   * retornar um observavel contendo um array de Exercise
   */
  ngOnInit(): void {
    this.exercises$ = this._exercises.getExercises();
  }

  /**
   * Cria o novo treino que vai ser inicializado e diretiona para a página de treino em andamento.
   */
  async startExercise() {
    await this._trainings.startNewTraining(this.selectedExercise);
    this._router.navigate(['/tabs/exercises/ongoing'], {
      relativeTo: this.route,
    });
  }

  logout() {
    this._auth.logout();
  }
}
