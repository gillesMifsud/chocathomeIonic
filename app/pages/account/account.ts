import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from './register/register';

@Component({
  templateUrl: 'build/pages/account/account.html',
})

export class AccountPage {
  constructor(private nav: NavController) {}

  goRegister() {
    this.nav.setRoot(RegisterPage);
  }
}
