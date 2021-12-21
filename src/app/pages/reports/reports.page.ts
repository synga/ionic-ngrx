import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reports',
  templateUrl: 'reports.page.html',
  styleUrls: ['reports.page.scss'],
})
export class ReportsPage {
  constructor(private _auth: AuthService) {}

  logout() {
    this._auth.logout();
  }
}
