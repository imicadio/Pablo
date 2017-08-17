import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { HaeroDetailComponent } from './events/haero-detail/haero-detail.component';
import { CreateEventComponent } from './events/create-event.component'
import { ErrorComponent } from './error/error.component'
import { HeroRouteActivator } from './events/haero-detail/hero-route-activator.service'

export const appRoutes:Routes = [
    { path: 'hero/new', component: CreateEventComponent },
    { path: 'hero', component: EventsListComponent },
    { path: 'hero/:id', component: HaeroDetailComponent, canActivate: [HeroRouteActivator] },
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/hero', pathMatch: 'full' }

]