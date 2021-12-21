import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-manage',
  templateUrl: 'manage.page.html',
  styleUrls: ['manage.page.scss'],
})
export class ManagePage implements OnInit {
  public exerciseIconMap: Map<string, string> = new Map([
    ['duration', 'timer'],
    ['repetition', 'body'],
  ]);

  public exercises$: Observable<Exercise[]>;

  constructor(
    private _exercises: ExercisesService,
    private _router: Router,
    private route: ActivatedRoute,
    private _alert: AlertController,
    private _auth: AuthService
  ) {}

  /**
   * Ao inicializar o componente, chamo o metodo o no serviço de exercises que me retorna um observavel
   * com os exercicios.
   */
  ngOnInit(): void {
    this.exercises$ = this._exercises.getExercises();
  }

  async editExercise(exercise: Exercise) {
    await this._exercises.storeEditingExercise(exercise);
    this._router.navigate(['edit-exercise'], {
      relativeTo: this.route,
    });
  }

  async deleteExercise(id: string) {
    const alert = this._alert.create({
      backdropDismiss: true,
      header: 'Deseja realmente excluir esse exercício?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            this._exercises.deleteExercise(id);
          },
        },
      ],
    });

    (await alert).present();
  }

  logout() {
    this._auth.logout();
  }
}
