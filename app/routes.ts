import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { HaeroDetailComponent } from './events/haero-detail/haero-detail.component';
import { CreateEventComponent } from './events/create-event.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './events/haero-detail/hero-route-activator.service'
import { EventListResolver } from './events/event-list-resolve.service'

export const appRoutes:Routes = [
    { path: 'hero/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateHero'] },
    { path: 'hero', component: EventsListComponent, resolve: {heroes: EventListResolver} },
    { path: 'hero/:id', component: HaeroDetailComponent, canActivate: [HeroRouteActivator] },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/hero', pathMatch: 'full' }

]