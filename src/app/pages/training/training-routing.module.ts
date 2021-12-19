import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingPage } from './training.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPage,
  },
  {
    path: 'ongoing',
    loadChildren: () =>
      import('./ongoing-training/ongoing-training.module').then(
        (m) => m.OngoingTrainingPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPageRoutingModule {}
