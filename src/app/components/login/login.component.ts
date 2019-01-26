import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/register.service';
import { Login } from '../../models/login';
import { $ } from 'protractor';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app'
import { access } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RegistroService]
})
export class LoginComponent implements OnInit {

  public login: Login;
  
  constructor(
    private _registroService: RegistroService,
    public router:Router
  ) { 

    this.login = new Login('','');
  }

  ngOnInit() {
  }

  loginUser(form){
    this._registroService.loginUser(this.login).subscribe(
      response => {
        console.log(this.login);
        console.log(response);
        alert('bienvenido ' + this.login.username);
        this.router.navigate(['/']);
        
      },
      error => {
        console.log(<any>error);
        alert('usuario o password incorrectos');
      }

    );
  }

  loginFirebase(){
   this._registroService.loginFacebook()
    .then((res) => {
      let token = res.credential['accessToken'];

      localStorage.setItem('userToken',JSON.stringify(token));
      this.router.navigate(['/']);
      
      
      
    }).catch(err => {
      console.log(err.message);    
    });
    
    
}

}
