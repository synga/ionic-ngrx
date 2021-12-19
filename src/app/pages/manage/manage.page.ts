import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise.model';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-manage',
  templateUrl: 'manage.page.html',
  styleUrls: ['manage.page.scss'],
})
export class ManagePage implements OnInit {
  public exercises$: Observable<Exercise[]>;

  constructor(private _exercises: ExercisesService) {}

  /**
   * Ao inicializar o componente, chamo o metodo o no serviço de exercises que me retorna um observavel
   * com os exercicios.
   */
  ngOnInit(): void {
    this.exercises$ = this._exercises.getExercises();
  }
}
