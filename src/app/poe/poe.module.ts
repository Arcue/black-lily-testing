import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PoeComponent } from './poe.component';
import { PoeResourcesComponent } from './resources/resources.component';
import { PoeCharactersComponent } from './characters/characters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  {
    path: '',
    component: PoeComponent
  }, {
    path: 'resources',
    component: PoeResourcesComponent
  }, {
    path: 'characters',
    component: PoeCharactersComponent
  }, {
    path: 'characters/:uPoeCharacter',
    component: PoeCharactersComponent
  }
];

@NgModule({
  declarations: [
    PoeComponent,
    PoeResourcesComponent,
    PoeCharactersComponent
  ],
  imports: [
    RouterModule.forChild(
      appRoutes,
    ),
    ScrollingModule,
    FontAwesomeModule,
    CommonModule
  ]
})
export class PoeModule { }
