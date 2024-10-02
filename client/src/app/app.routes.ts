import { Routes } from '@angular/router';
import { NewReportComponent } from './register/new-report.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowReportComponent } from './show-report/show-report.component';

export const routes: Routes = [
    {
        path: 'new-report',
        component: NewReportComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'show-report',
        component: ShowReportComponent
    },
    {
        pathMatch: 'full',
        redirectTo: 'home',
        path: ''
    },
    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
