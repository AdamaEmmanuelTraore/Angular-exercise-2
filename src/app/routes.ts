import {Routes} from '@angular/router'
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetails } from "./events/event-details/event-details.component";
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListComponent } from "./events/events-list.component";

// QUI CREO GLI URL PER NAVIGARE NEL MIO SITO
export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path:'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetails, canActivate: [EventRouteActivator], canDeactivate: ['canDeactivateCreateEvent']},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]