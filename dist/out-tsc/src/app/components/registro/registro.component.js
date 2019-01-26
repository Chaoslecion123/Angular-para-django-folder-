import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RegistroService } from '../../services/register.service';
import { Registro } from '../../models/register';
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(_registroService) {
        this._registroService = _registroService;
        this.register = new Registro('', '', '');
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.registerUser = function (form) {
        var _this = this;
        //console.log(this.register)
        this._registroService.registerUser(this.register).subscribe(function (response) {
            alert('bienvenido' + _this.register.username);
            form.reset();
        }, function (error) {
            console.log(error);
        });
    };
    RegistroComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.css'],
            providers: [RegistroService]
        }),
        tslib_1.__metadata("design:paramtypes", [RegistroService])
    ], RegistroComponent);
    return RegistroComponent;
}());
export { RegistroComponent };
//# sourceMappingURL=registro.component.js.map