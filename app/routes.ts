import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { HaeroDetailComponent } from './events/haero-detail/haero-detail.component';

export const appRoutes:Routes = [
    { path: 'hero', component: EventsListComponent },
    { path: 'hero/:id', component: HaeroDetailComponent },
    { path: '', redirectTo: '/hero', pathMatch: 'full' }

]