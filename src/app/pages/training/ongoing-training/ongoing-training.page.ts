import { Training } from 'src/app/interfaces/training.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TrainigsService } from 'src/app/services/trainings/trainings.service';
import { take } from 'rxjs/operators';

/**
 * TODO:
 * - fazer esse componente
 * - - completar o treino e salvar
 * - - cancelar o treino e salvar
 * - - como fazer isso com o backbutton do ionic?
 * - - tenho ainda algum navguard ou algo do ionic para executar antes de voltar a pagina?
 * - - faço com o authguards do proprio angular?
 * - - qualquer coisa ao invés de usar o backbutton, uso um botão normal e trato a navegação aqui
 */
@Component({
  selector: 'app-ongoing-training',
  templateUrl: './ongoing-training.page.html',
  styleUrls: ['./ongoing-training.page.scss'],
})
export class OngoingTrainingPage implements OnInit {
  /**
   * Dados do treino em andamento
   */
  public training: Training;
  constructor(private _training: TrainigsService) {}

  /**
   * Ao inicializar a pagina, busca o treino em andamento e pega apenas 1 para não correr risco caso, de
   * alguma forma, dispare um novo treino.
   */
  ngOnInit() {
    this._training
      .getCurrentOngoingTraining()
      .pipe(take(1))
      .subscribe((training) => (this.training = training));
  }
}
