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
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthenticationService } from './user/login/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventComponent } from './events/create-events/create-event.component';
import { SessionListComponent } from './events/event-details/session.list.component';
import { DurationPipe } from './events/service/duration.pipe';
import { HttpClientModule } from "@angular/common/http";
import { EventResolver } from './events/event-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetails,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    EventResolver,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthenticationService
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
