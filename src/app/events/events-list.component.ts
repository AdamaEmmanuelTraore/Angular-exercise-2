// COMPONENTE PADRE

// 2- IMPORTO IL MIO COMPONENTE
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./service/event.model";
import { EventService } from "./service/event.service";

// 3- CREO IL MIO COMPONENTE CHE AVRA' UN SOLO SELETTORE
@Component ({
    template: `
        <div class="info">
            <h1>Angular Events</h1>
            <hr>
            <div *ngFor="let event of events" class="pick">
            <event-thumbnail (clicked)="handleClicked(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    `
})

// 1- ESPORTO LA MIA CLASSE
export class EventsListComponent implements OnInit {
  events!: IEvent[]
  constructor(private eventService: EventService, private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
  handleClicked(data: any) {
    console.log("received: "+ data)
  }
}