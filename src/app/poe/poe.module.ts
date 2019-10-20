import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PoeComponent } from './poe.component';

const appRoutes: Routes = [
  {
    path: '',  component: PoeComponent
  }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      appRoutes,
    ),
    ScrollingModule,
    CommonModule
  ]
})
export class PoeModule { }
