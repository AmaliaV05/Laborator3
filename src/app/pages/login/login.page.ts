import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
    encapsulation: ViewEncapsulation.None
})

export class LoginPage {
    constructor(private router: Router){        
    }
    logIn() {
        this.router.navigateByUrl('films');
    }
}