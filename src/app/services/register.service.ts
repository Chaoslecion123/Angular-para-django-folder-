import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase/app';

//import { Registro } from '../models/register';


@Injectable()
export class RegistroService{
    constructor(
        
        private _http:HttpClient,
        public afAuth : AngularFireAuth
        
        ){ }


    registerUser(registro):Observable<any>{
        let params = JSON.stringify(registro);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post('http://127.0.0.1:8000/api/users/?format=json',params,{headers:headers});
    }

    loginUser(login):Observable<any>{
        let params = JSON.stringify(login);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post('http://127.0.0.1:8000/api/auth/',params,{headers:headers});
    }

    loginFacebook(){
        return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
    }
    
    

    loginDJangoFacebook(){
        let userToken = JSON.parse(localStorage.getItem('userToken'));
        const headers = new HttpHeaders().set('Authentication' , 'Bearer facebook ' + userToken);
        return this._http.get('http://127.0.0.1:8000/api/users/', {headers:headers});
    }

    
}

