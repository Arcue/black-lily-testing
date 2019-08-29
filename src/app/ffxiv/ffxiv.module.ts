import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfxivRetainerComponent } from './ffxiv-retainer/ffxiv-retainer.component';
import { RetainerListComponent } from './ffxiv-retainer/retainer-list/retainer-list.component';
import { RetainerInventoryComponent } from './ffxiv-retainer/retainer-inventory/retainer-inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { FfxivComponent } from './ffxiv.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

const appRoutes: Routes = [
  {
    path: '',  component: FfxivComponent
  },
  {
    path: 'retainer',
    component: FfxivRetainerComponent,
  },
  {
      path: 'retainer/:uRetainer',
      component: FfxivRetainerComponent
  }];

@NgModule({
  declarations: [
    FfxivRetainerComponent,
    RetainerListComponent,
    RetainerInventoryComponent,
    FfxivComponent
  ],
  exports: [FfxivRetainerComponent],
  imports: [
    RouterModule.forChild(
      appRoutes,
    ),
    ScrollingModule,
    CommonModule
  ]
})
export class FfxivModule { }
