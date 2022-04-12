import { Component, OnInit } from "@angular/core";
import { EventService } from "../service/event.service";

// QUI DEFINISCO NELLO SPECIFICO COSA MI DEVE MOSTRARE IL MIO SITO
@Component({
    templateUrl: './event-details.component.html'
})

export class EventDetails {
    event: any
    constructor(private eventService: EventService) {

    }
    ngOnInit() {
        this.event = this.eventService.getElement(1)
    }
}