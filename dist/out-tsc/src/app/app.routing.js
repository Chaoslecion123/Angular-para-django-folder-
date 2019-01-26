import { RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorComponent }
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map