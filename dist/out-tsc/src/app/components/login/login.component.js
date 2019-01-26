import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RegistroService } from '../../services/register.service';
import { Login } from '../../models/login';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_registroService) {
        this._registroService = _registroService;
        this.login = new Login('', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (form) {
        var _this = this;
        this._registroService.loginUser(this.login).subscribe(function (response) {
            console.log(response);
            alert('bienvenido ' + _this.login.username);
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error);
            alert('usuario o password incorrectos');
        });
    };
    LoginComponent.prototype.loginFirebase = function () {
        this._registroService.loginFacebook()
            .then(function (res) {
            var token = res.credential['accessToken'];
            localStorage.setItem('userToken', token);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [RegistroService]
        }),
        tslib_1.__metadata("design:paramtypes", [RegistroService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map