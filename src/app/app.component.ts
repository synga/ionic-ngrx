import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './services/exercises/exercises.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _exercises: ExercisesService) {}

  /**
   * Inicializo os exercicios no meu store
   */
  ngOnInit(): void {
    this._exercises.loadExercises();
  }
}
