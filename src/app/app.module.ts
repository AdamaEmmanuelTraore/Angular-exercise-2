import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/service/event.service';
import { EventDetails } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes'
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetails,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// CREAZIONE DI UNA FUNZIONE PER LA GUARDIA "canDeactivateCreateEvent"
export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('Are you sure? You have not complete the form')
  }
  return true
}
