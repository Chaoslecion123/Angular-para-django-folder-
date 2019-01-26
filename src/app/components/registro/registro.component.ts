import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/register.service';
import { Registro } from '../../models/register';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {

  public register:Registro;
  public save_register;
  
  constructor(private _registroService: RegistroService) { 

    this.register = new Registro('','','');
  }

  ngOnInit() {
  }

  registerUser(form){
    //console.log(this.register)
    this._registroService.registerUser(this.register).subscribe(
      
      response => {
        alert('bienvenido'+ this.register.username)
        form.reset();
    
      },

      error => {
        console.log(<any>error);
      }
    );

  }

}
