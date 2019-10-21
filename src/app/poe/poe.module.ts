import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PoeComponent } from './poe.component';
import { ResourcesComponent } from './resources/resources.component';

const appRoutes: Routes = [
  {
    path: '',  component: PoeComponent
  }, {
    path: 'resources',  component: ResourcesComponent
  }];

@NgModule({
  declarations: [
    PoeComponent,
    ResourcesComponent
  ],
  imports: [
    RouterModule.forChild(
      appRoutes,
    ),
    ScrollingModule,
    CommonModule
  ]
})
export class PoeModule { }
