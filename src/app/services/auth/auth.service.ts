import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './../../interfaces/user.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import * as fromAuth from './auth.reducer';
import { Store } from '@ngrx/store';
import { SetUserId } from './auth.actions';
import { getUserId } from './auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private ngAuth: AngularFireAuth,
    private db: AngularFirestore,
    private alertCtrl: AlertController,
    private store: Store<fromAuth.State>
  ) {}

  async loginUser({ email, password }) {
    return await this.ngAuth.signInWithEmailAndPassword(email, password);
  }

  async createUser(userData: User) {
    try {
      // desestruturação dupla (?)
      const {
        user: { uid },
      } = await this.ngAuth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );
      return await this.db.collection('user').add({
        uid,
        email: userData.email,
        name: userData.name,
      });
    } catch (error) {
      return error;
    }
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Deseja sair da aplicação?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Sim',
          handler: () => {
            this.ngAuth.signOut();
          },
        },
      ],
    });

    (await alert).present();
  }

  setUserId(userId: string) {
    this.store.dispatch(SetUserId({ payload: userId }));
  }

  getUserId(): Observable<string> {
    return this.store.select(getUserId);
  }
}
