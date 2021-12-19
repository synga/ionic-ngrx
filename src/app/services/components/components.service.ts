import { Injectable, OnInit } from '@angular/core';
import {
  AlertController,
  AlertOptions,
  LoadingController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private loading: HTMLIonLoadingElement;

  constructor(
    private _loading: LoadingController,
    private _alert: AlertController
  ) {}

  /**
   * Apresenta o elemento de loading.
   */
  public async startLoading(): Promise<void> {
    this.loading = await this._loading.create({
      animated: true,
      backdropDismiss: false,
      message: 'Aguarde...',
      spinner: 'bubbles',
    });
    return this.loading.present();
  }

  /**
   * Para o loading apresentado.
   */
  public async stopLoading(): Promise<boolean> {
    return this.loading.dismiss();
  }

  /**
   * Cria um alerta simples para ser apresentado, normalmente alguma mensagem com pouca interação do
   * usuário que serve apenas para comunicar uma mensagem rapida.
   */
  public async createSimpleAlertMessage(alertOptions: AlertOptions) {
    return this._alert.create({
      ...alertOptions,
      backdropDismiss: true,
      buttons: ['Ok'],
    });
  }
}
