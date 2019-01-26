import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import { Registro } from '../models/register';
var RegistroService = /** @class */ (function () {
    function RegistroService(_http, afAuth) {
        this._http = _http;
        this.afAuth = afAuth;
    }
    RegistroService.prototype.registerUser = function (registro) {
        var params = JSON.stringify(registro);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post('http://127.0.0.1:8000/api/users/?format=json', params, { headers: headers });
    };
    RegistroService.prototype.loginUser = function (login) {
        var params = JSON.stringify(login);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post('http://127.0.0.1:8000/api/auth/', params, { headers: headers });
    };
    RegistroService.prototype.loginFacebook = function () {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    };
    RegistroService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AngularFireAuth])
    ], RegistroService);
    return RegistroService;
}());
export { RegistroService };
//# sourceMappingURL=register.service.js.map