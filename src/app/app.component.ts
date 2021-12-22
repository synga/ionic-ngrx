import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { ExercisesService } from './services/exercises/exercises.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _router: Router,
    private ngAuth: AngularFireAuth,
    private _auth: AuthService
  ) {}

  /**
   * Inicializo os exercicios no meu store
   */
  ngOnInit(): void {
    this.checkUserAuth();
  }

  checkUserAuth() {
    this.ngAuth.onAuthStateChanged((auth) => {
      if (auth) {
        this._auth.setUserId(auth.uid);
        this._router.navigate(['/']);
      } else {
        this._router.navigate(['login']);
      }
    });
  }
}
