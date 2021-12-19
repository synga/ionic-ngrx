import { StoreModule } from '@ngrx/store';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagePage } from './manage.page';

import { ManagePageRoutingModule } from './manage-routing.module';
import { exerciseReducer } from 'src/app/services/exercises/exercises.reducer';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ManagePage }]),
    ManagePageRoutingModule,
    StoreModule.forFeature('exercises', exerciseReducer),
  ],
  declarations: [ManagePage],
})
export class ManagePageModule {}
