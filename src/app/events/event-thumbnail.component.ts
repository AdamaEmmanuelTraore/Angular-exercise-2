// COMPONENTE FIGLIO
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="info">
        <div><h1>{{event.name}}</h1></div>
        <div><h3>Data: {{event.data}}</h3></div>
        <div><h3>Price: {{event.price}}</h3></div>
        <div><h3>Image: {{event.imageUrl}}</h3></div>
        <div><h3>Adress: {{event.location.adress}}</h3></div>
        <div><h3>City: {{event.location.city}}</h3></div>
        <div><h3>Country: {{event.location.country}}</h3></div>
    </div>
    `
})

export class EventThumbnailComponent{
    /* INPUT È UN DECORATORE CHE DICE AD ANGULAR CHE QUESTO EVENTO VERRA' PASSATO AD UN ALTRO COMPONENTE */
    @Input() event: any
}