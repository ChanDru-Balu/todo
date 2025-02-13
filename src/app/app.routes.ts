import { Routes } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';

export const routes: Routes = [
    {
        path: 'simple',
        component: SimpleComponent,
        pathMatch: 'full'
    }
];
