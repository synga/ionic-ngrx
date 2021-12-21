import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComponentsService } from 'src/app/services/components/components.service';
import { User } from 'src/app/interfaces/user.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private _auth: AuthService,
    private _components: ComponentsService
  ) {}

  async createUser() {
    try {
      if (this.userForm.valid) {
        await this._components.startLoading();
        await this._auth.createUser(this.userForm.value as User);
        await this._components.stopLoading();
      }
    } catch (error) {
      console.log('[/] create user error', error);
      await this._components.stopLoading();
    }
  }
}
