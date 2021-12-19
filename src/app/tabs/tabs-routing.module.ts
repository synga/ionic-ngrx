import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'exercises',
        loadChildren: () =>
          import('../pages/training/training.module').then(
            (m) => m.TrainingPageModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../pages/reports/reports.module').then(
            (m) => m.ReportsPageModule
          ),
      },
      {
        path: 'manage',
        loadChildren: () =>
          import('../pages/manage/manage.module').then(
            (m) => m.ManagePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/exercises',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/exercises',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
