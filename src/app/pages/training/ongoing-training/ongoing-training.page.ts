import { Training } from 'src/app/interfaces/training.model';
import { Component, OnInit } from '@angular/core';
import { TrainigsService } from 'src/app/services/trainings/trainings.service';
import { Location } from '@angular/common';

/**
 * TODO:
 * - fazer esse componente
 * - - completar o treino e salvar
 * - - cancelar o treino e salvar
 * - - tocar um som ao concluir: https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Audio_API
 * - - plugin ionic audio :https://ionicframework.com/docs/native/native-audio
 * - - progress bar: https://ionicframework.com/docs/api/progress-bar
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

  constructor(
    private _training: TrainigsService,
    private _location: Location
  ) {}

  /**
   * Ao inicializar a pagina, busca o treino em andamento e pega apenas 1 para não correr risco caso, de
   * alguma forma, dispare um novo treino.
   */
  ngOnInit() {
    this._training.getCurrentOngoingTraining().subscribe((training) => {
      this.training = training;
    });
  }

  cancelTraining() {
    this._location.back();
  }
}
