import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  constructor(public http: HttpClient, private _db: AngularFireDatabase,
    private _fireAuth: AngularFireAuth) {
  }

  get_all(){
    return this._db.list("usuarios",res => res.orderByChild('nome'))
      .snapshotChanges()
      .map((changes) => {
        return changes.map(change => ({key: change.payload.key, ...change.payload.val()}))
      });
    }

  get(usuario){
    return this._fireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha)
      .then(res => res)
      .catch(e => {return {error: 400}})
  }

  save(usuario){
    return new Promise((resolve, reject) => {
      this._fireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha).then(() => {
        this._db.list("usuarios").push(usuario).then(() => {
          resolve();
        });
      }).catch(e => {
        console.log(e);
      })
    })
  }

}
