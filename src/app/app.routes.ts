import { Routes } from '@angular/router';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'general',
        component: GeneralComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'general' }
    }
];
