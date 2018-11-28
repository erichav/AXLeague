import { Component } from '@angular/core';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCweyV51iodRnBsqxhiHcXbo1B8wPRAUpg",
  authDomain: "axleague-e41c2.firebaseapp.com",
  databaseURL: "https://axleague-e41c2.firebaseio.com",
  projectId: "axleague-e41c2",
  storageBucket: "axleague-e41c2.appspot.com",
  messagingSenderId: "524156546659"
};
firebase.initializeApp(config);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ax-league';
}
