import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Film, GENRE } from 'src/app/models/film.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-add-film',
    templateUrl: 'add.film.page.html',
    styleUrls: ['add.film.page.scss'],
})

export class AddFilmPage {
    GENRE = GENRE;
    
    film = new Film();

    constructor(
        private apiSvc: ApiService,
        private navCtrl: NavController,
        private alertCtrl: AlertController
      ) {}

    addFilm() {
        this.apiSvc.post('api/Film', this.film).subscribe(
      () => {
        this.navCtrl.pop();
      },
      (err) => {
        let message = 'Validation error';
        const errorsArray = err?.error?.errors;
        if (errorsArray) {
          message = Object.values(errorsArray)[0] as string;
        }
        this.alertCtrl
          .create({
            header: 'Error',
            message: message,
            buttons: ['Ok'],
          })
          .then((al) => al.present());
      }
    );
  }

  backToFilms() {
    this.navCtrl.pop();
  }    
}