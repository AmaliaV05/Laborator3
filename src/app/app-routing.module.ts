import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmsPage } from './pages/films/films.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'films',
    component: FilmsPage
    // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
