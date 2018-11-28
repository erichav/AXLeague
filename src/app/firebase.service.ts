import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  database = firebase.database();
  constructor() { }
  
  public getEquipos(){
    return firebase.database().ref('/equipos').once('value').then(function(snapshot) {
      console.log(snapshot.val());
    });
  }
  
  public logIn(user, password){
    firebase.database().ref('/users/'+user).once('value').then(function(snapshot) {
      console.log(snapshot.val());
    });
  }
}
