import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePage } from './manage.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePage,
  },
  {
    path: 'new-exercise',
    loadChildren: () => import('./new-exercise/new-exercise.module').then( m => m.NewExercisePageModule)
  },
  {
    path: 'edit-exercise',
    loadChildren: () => import('./edit-exercise/edit-exercise.module').then( m => m.EditExercisePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePageRoutingModule {}
