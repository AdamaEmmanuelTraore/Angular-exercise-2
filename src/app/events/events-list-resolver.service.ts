import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs/operators";
import { EventService } from "./service/event.service";

/*QUI CREO UN SERVIZIO INIETTABILE CHE IMPLEMENTA
    LA RISOLUZIONE(dove effettuerò delle chiamate AJAX)*/
@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        return this.eventService.getEventList().pipe(map(events => events)) // map MI DA ACCESSO AGLI EVENTI CHE VENGONO TRASMESSI SU QUEL FLUSSO
    }
}