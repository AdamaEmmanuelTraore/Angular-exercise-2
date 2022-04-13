import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div>
            <h3>[Create Event From will go here]</h3>
            <br>
            <br>
            <button type="submit" class="sBtn">Save</button>
            <button type="button" class="cBtn" (click)="stop()">Cancel</button>
        </div>
    `
})
// QUI AGGIUNGO UN METODO AL MIO PULSANTE "CANCEL" AL QUALE PASSO IL "ROUTER" PER POTER NAVIGARE IN UN ALTRA PAGINA
export class CreateEventComponent {
    isDirty:boolean = true
    constructor(private router: Router) {

    }
    stop() {
        this.router.navigate(['/events'])
    }

}