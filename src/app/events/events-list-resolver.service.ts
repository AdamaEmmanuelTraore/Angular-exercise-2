import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./service/event.service";
// QUESTA CLASSE MI SERVE PER IL PRE-CARICAMENTO DELLA PAGINA

/*QUI CREO UN SERVIZIO INIETTABILE CHE IMPLEMENTA
    LA RISOLUZIONE(dove effettuerò delle chiamate AJAX)*/
@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        return this.eventService.getEventList()
    }
}