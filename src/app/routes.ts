import {Routes} from '@angular/router'
import { EventDetails } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";

// QUI CREO GLI URL PER NAVIGARE NEL MIO SITO
export const appRoutes: Routes = [
    {path:'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetails},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]