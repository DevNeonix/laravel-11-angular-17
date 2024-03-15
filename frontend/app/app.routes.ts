import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'hola',
        loadComponent: () => import('./hola/hola.component').then(c => c.HolaComponent),
    },
];
