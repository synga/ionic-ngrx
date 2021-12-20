import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExercisesService } from './services/exercises/exercises.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _exercises: ExercisesService, private _router: Router) {}

  /**
   * Inicializo os exercicios no meu store
   */
  ngOnInit(): void {
    this._router.navigate(['/']);
    this._exercises.loadExercises();
  }
}
