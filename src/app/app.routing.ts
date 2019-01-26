import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule  } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes : Routes = [
    {path:'',component:HomeComponent},
    {path:'registro',component:RegistroComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);