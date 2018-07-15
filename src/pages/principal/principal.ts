import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  title = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _fireAuth: AngularFireAuth) {
  }
  
  ionViewWillLoad(){
    this._fireAuth.authState.subscribe(data => {
      console.log(data);
      
      if(data){
        this.title = "Welcome";
      }
    })
  }

}
