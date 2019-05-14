import { NgModule } from '@angular/core';
import { ItemDefinitionComponent } from './item-definition/item-definition.component';
import { DefinitionTasksComponent } from './definition-tasks/definition-tasks.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ItemDefinitionComponent,
        children: [
          {
            path: 'tasks',
            component: DefinitionTasksComponent
          }
        ]
      }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DefinitionRoutingModule { }

@NgModule({
    declarations: [
      ItemDefinitionComponent,
      DefinitionTasksComponent
    ],
    imports: [
        DefinitionRoutingModule
    ],
    providers: []
  })
  export class DefinitionModule { }