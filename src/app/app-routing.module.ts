import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddFilmPage } from './pages/add-film/add.film.page';
import { FilmsPage } from './pages/films/films.page';
import { LoginPage } from './pages/login/login.page';
import { ReservationPage } from './pages/reservations/reservation.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'films',
    component: FilmsPage
  },
  {
    path: 'films/add',
    component: AddFilmPage
  },
  {
    path: 'reservations',
    component: ReservationPage
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
