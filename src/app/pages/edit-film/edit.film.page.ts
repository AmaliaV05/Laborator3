import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Film, GENRE} from 'src/app/models/film.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-edit-film',
    templateUrl: 'edit.film.page.html',
})

export class EditFilmPage implements OnInit {
    GENRE = GENRE;
    film = new Film();
    message = '';

    constructor(
        private apiSvc: ApiService,
        private navCtrl: NavController,
        private alertCtrl: AlertController,
        private route: ActivatedRoute) {  }

    ngOnInit(): void {
        this.message = '';
        this.getFilm(this.route.snapshot.paramMap.get('id'))
    }
    
    getFilm(id): void {
        this.apiSvc.getF(id)
          .subscribe(
            data => {
              this.film = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }

    updateFilm(): void {
    this.apiSvc.update(this.film.id, this.film)
        .subscribe(
        response => {
            console.log(response);
            this.message = 'The film was updated successfully!';
        },
        error => {
            console.log(error);
        });
    }

    saveFilm(film: { id: any; }) {
        this.apiSvc.put(`api/Film/${film.id}`, film).subscribe(            
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

//   backToFilms() {
//     this.navCtrl.pop();
//   }    
}