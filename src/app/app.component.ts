import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyAiwvdRpBP-GhILQRfsZi4Yhxhvca-_OPw",
    authDomain: "listado-personas-3a73a.firebaseapp.com",
   })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }

}
