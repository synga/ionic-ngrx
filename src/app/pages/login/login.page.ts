import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/login.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private _auth: AuthService,
    private _components: ComponentsService
  ) {}

  async login() {
    try {
      if (this.loginform.valid) {
        await this._components.startLoading();
        await this._auth.loginUser(this.loginform.value as Login);
        await this._components.stopLoading();
      }
    } catch (error) {
      await this._components.stopLoading();
    }
  }
}
