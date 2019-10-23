import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { WarframeComponent } from './warframe/warframe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterLegalComponent } from './footer-legal/footer-legal.component';
import { ClickOutsideDirective } from './click-outside.directive';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: 'main', component: MainComponent },
  { path: 'ffxiv', loadChildren: () =>
    import('./ffxiv/ffxiv.module')
    .then(mod => mod.FfxivModule)},
    { path: 'ffxiv/retainer', loadChildren: () =>
    import('./ffxiv/ffxiv.module')
    .then(mod => mod.FfxivModule)},
    { path: 'poe', loadChildren: () =>
    import('./poe/poe.module')
    .then(mod => mod.PoeModule)},
    { path: 'poe/resources', loadChildren: () =>
    import('./poe/poe.module')
    .then(mod => mod.PoeModule)},
    { path: 'poe/characters', loadChildren: () =>
     import('./poe/poe.module')
     .then(m => m.PoeModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    WarframeComponent,
    PageNotFoundComponent,
    FooterLegalComponent,
    ClickOutsideDirective,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ScrollingModule,
    ScrollDispatchModule,
    BrowserAnimationsModule
  ],
  exports: [
    ClickOutsideDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
