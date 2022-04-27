import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IEvent } from "../service/event.model";
import { EventService } from "../service/event.service";

@Component({
    templateUrl: `./create-event.component.html`
})
// QUI AGGIUNGO UN METODO AL MIO PULSANTE "CANCEL" AL QUALE PASSO IL "ROUTER" PER POTER NAVIGARE IN UN ALTRA PAGINA
export class CreateEventComponent {
    isDirty:boolean = true
    newEvent: any

    constructor(private router: Router, private service: EventService) {

    }
    saveEvent(formValues: IEvent) {
      this.service.SaveEvent(formValues).subscribe(() => {
        this.isDirty = false
        this.router.navigate(['/events'])
      })
    }

    stop() {
        this.router.navigate(['/events'])
    }
}