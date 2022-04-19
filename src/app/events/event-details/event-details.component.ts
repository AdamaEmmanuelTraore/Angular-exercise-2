import { Component} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../service/event.model";
import { EventService } from "../service/event.service";

// QUI DEFINISCO NELLO SPECIFICO COSA MI DEVE MOSTRARE IL MIO SITO
@Component({
    templateUrl: './event-details.component.html'
})

export class EventDetails {
    event: any //IEvent // QUI RICCHIAMO IL MIO SERVIZIO   |   QUI CHIAMO UN COSTRUTTO/SERVIZIO CHE MI PERMETTERA' DI NON SPECIFICARE L'ID
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {                // IL + QUI SERVE A CASTARLO/TRASMETTERLO COME NUMERO
        this.event = this.eventService.getElement(+this.route.snapshot.params['id'])
    }
}