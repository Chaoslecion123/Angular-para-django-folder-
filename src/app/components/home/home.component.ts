import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/register.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RegistroService]
})
export class HomeComponent implements OnInit {

  constructor(private _registroService: RegistroService) { }

  ngOnInit() {
  }

  loginDJangoFacebook(){
    this._registroService.loginDJangoFacebook().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
