import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = "";
  password = "";

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }
  
  pressLogin(){
    console.log(this.user + " " + this.password);
    //this.firebase.logIn(this.user, this.password);
  }

}
