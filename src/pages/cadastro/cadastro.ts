import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public usuario = {
    nome: '',
    email: '',
    senha: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      private _usuarioServ: UsuarioServiceProvider) {
  }
  
  salvar(){
    this._usuarioServ.save(this.usuario).then(res => console.log(res));
  }


}
