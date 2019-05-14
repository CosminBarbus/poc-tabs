import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './core/tabs/tabs.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemComponent } from './pages/item/item.component';
import { ChildItemComponent } from './pages/child-item/child-item.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftNavigationComponent } from './core/left-navigation/left-navigation.component';
import { ItemDefinitionComponent } from './pages/item-definition/item-definition.component';
import { ItemExecutionComponent } from './pages/item-execution/item-execution.component';
import { DefinitionTasksComponent } from './pages/definition-tasks/definition-tasks.component';
import { ExecutionTasksComponent } from './pages/execution-tasks/execution-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    PagenotfoundComponent,
    AdminComponent,
    ItemsComponent,
    ItemComponent,
    ChildItemComponent,
    HomeComponent,
    LeftNavigationComponent,
    ItemExecutionComponent,
    ExecutionTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
