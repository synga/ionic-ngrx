import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ExercisesService } from './services/exercises/exercises.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _exercises: ExercisesService,
    private _router: Router,
    private ngAuth: AngularFireAuth
  ) {}

  /**
   * Inicializo os exercicios no meu store
   */
  ngOnInit(): void {
    this.checkUserAuth();
    this._exercises.loadExercises();
  }

  checkUserAuth() {
    this.ngAuth.onAuthStateChanged((auth) => {
      if (auth) {
        this._router.navigate(['/']);
      } else {
        this._router.navigate(['login']);
      }
    });
  }
}
