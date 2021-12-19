import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngoingTrainingPage } from './ongoing-training.page';

const routes: Routes = [
  {
    path: '',
    component: OngoingTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngoingTrainingPageRoutingModule {}
