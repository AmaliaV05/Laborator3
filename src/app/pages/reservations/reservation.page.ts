import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: 'reservation.page.html',
})
export class ReservationPage {
  reservation;

  constructor(private apiSvc: ApiService) {}

  ionViewWillEnter() {
    this.apiSvc.get('api/Reservation').subscribe((response) => {
      this.reservation = response;
    });
  }
}
