// 2- IMPORTO IL MIO COMPONENTE
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

// 3- CREO IL MIO COMPONENTE CHE AVRA' UN SOLO SELETTORE
@Component ({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

// 1- ESPORTO LA MIA CLASSE
export class EventsListComponent {
    event = {
        id: 1,
        name: "Angular connect",
        data: "07/04/2022",
        price: "200$",
        imageUrl: "assets/Images/Angular.png",
        location: {
            adress: "4551485 TS",
            city: "London",
            country: "England"
        }
    }
}