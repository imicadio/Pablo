import { Routes } from '@angular/router'

import {
    EventsListComponent,
    HaeroDetailComponent,
    CreateEventComponent,
    HeroRouteActivator,
    EventListResolver
} from './events/index'

import { ErrorComponent } from './error/error.component'


export const appRoutes:Routes = [
    { path: 'hero/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateHero'] },
    { path: 'hero', component: EventsListComponent, resolve: {heroes: EventListResolver} },
    { path: 'hero/:id', component: HaeroDetailComponent, canActivate: [HeroRouteActivator] },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/hero', pathMatch: 'full' }

]