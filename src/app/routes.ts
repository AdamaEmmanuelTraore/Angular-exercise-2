import {Routes} from '@angular/router'
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-events/create-event.component';
import { EventDetails } from "./events/event-details/event-details.component";
import { EventResolver } from './events/event-resolver.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from "./events/events-list.component";

// QUI CREO GLI URL PER NAVIGARE NEL MIO SITO
export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component: EventDetails, resolve: {events: EventResolver}},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},

    // QUI FACCIO L'IMPORTAZIONE DINAMICA 
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m=> m.UserModule)
    }
]