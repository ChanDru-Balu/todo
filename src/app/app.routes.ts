import { Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { BuiltInControlComponent } from './built-in-control/built-in-control.component';
import { FormsServicesComponent } from './forms-services/forms-services.component';

export const routes: Routes = [
    {
        path: 'simple',
        component: SimpleComponent,
        pathMatch: 'full'
    },
    {
        path: 'built-in',
        component: BuiltInControlComponent,
        pathMatch: 'full'
    },
    {
        path: 'forms-services',
        component: FormsServicesComponent,
        pathMatch: 'full'
    }
];
