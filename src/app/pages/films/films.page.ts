import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Film, Genre } from 'src/app/models/film.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-films',
    templateUrl: 'films.page.html',
    styleUrls: ['films.page.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FilmsPage {
    films: Array<Film>;

    constructor(private apiSvc: ApiService, private router: Router) { }
    
    ionViewWillEnter() {
        this.loadFilms();
    }

    goToAddFilm() {
        this.router.navigateByUrl('films/add');
    }

    deleteFilm(film: Film) {
        this.apiSvc.delete(`api/Film/${film.id}`).subscribe(() => {
          this.loadFilms();
        });
      }
    
    private loadFilms() {
      this.apiSvc.get('api/Film').subscribe((response: Array<Film>) => {
        this.films = response;
      });
    }
}