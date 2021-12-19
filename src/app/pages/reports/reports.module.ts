import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportsPage } from './reports.page';

import { ReportsPageRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ReportsPageRoutingModule],
  declarations: [ReportsPage],
})
export class ReportsPageModule {}
