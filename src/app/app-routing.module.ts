import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemExecutionComponent } from './pages/item-execution/item-execution.component';
import { ExecutionTasksComponent } from './pages/execution-tasks/execution-tasks.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent,
    children: [
      {
        path: ':id',
        component: ItemComponent,
        runGuardsAndResolvers: 'pathParamsChange',
        children: [
          {
            path: 'definition',
            loadChildren: './pages/definition.module#DefinitionModule',
          },
          {
            path: 'execution',
            component: ItemExecutionComponent,
            children: [
              {
                path: 'tasks',
                component: ExecutionTasksComponent
              }
            ]
          }
        ]
      }
    ]
  },
  { path: 'admin', component: AdminComponent},
  { path: '',   redirectTo: '/items', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
