import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
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
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
                                    // IL + QUI SERVE A CASTARLO/TRASMETTERLO COME NUMERO
            this.eventService.getElement(+params['id']).subscribe((event: IEvent) => {
                this.event = event
            })

        })
    }
}