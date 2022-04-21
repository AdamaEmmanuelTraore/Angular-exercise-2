import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../service/event.model";
import { EventService } from "../service/event.service";

// QUI DEFINISCO NELLO SPECIFICO COSA MI DEVE MOSTRARE IL MIO SITO
@Component({
    templateUrl: './event-details.component.html'
})

export class EventDetails implements OnInit {
    event!: IEvent // QUI RICCHIAMO IL MIO SERVIZIO   |   QUI CHIAMO UN COSTRUTTO/SERVIZIO CHE MI PERMETTERA' DI NON SPECIFICARE L'ID
    filterBy: string = 'all' // QUI CREO UNA NUOVA PROPRIETA' PER FILTRARE I DATI
    sortBy: string = 'votes' // QUI CREO UNA NUOVA PROPRIETA' PER ORDINARE I DATI

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {                // IL + QUI SERVE A CASTARLO/TRASMETTERLO COME NUMERO
        this.event = this.eventService.getElement(+this.route.snapshot.params['id'])
    }
}