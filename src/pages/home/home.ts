import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthProvider } from '../../provider/auth.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authProvider: AuthProvider) {
    this.authProvider.login('admin', 'admin').subscribe((res) => { console.log(res) }, (res) => { console.log(res) });
  }

}
