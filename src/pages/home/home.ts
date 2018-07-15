import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario = {
    email: "dsahudau@asd.com",
    senha: 'sdasdasdasd'
  };

  constructor(public navCtrl: NavController, private _usuarioServ: UsuarioServiceProvider,
      private _fireAuth: AngularFireAuth) {
  }

  login(){

    this._usuarioServ.get(this.usuario).then(data => {
      console.log("data:",data);
    })

  }

  ir_cadastro(){
    this.navCtrl.push("CadastroPage");
  }
  
}
