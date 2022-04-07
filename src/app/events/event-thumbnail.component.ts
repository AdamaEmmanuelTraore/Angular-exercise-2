import { Component, Input } from "@angular/core";

@Component({
    selector: '<event-thumbnail>',
    template: `
        <div class="info">
        <h1>{{event.name}}</h1>
        <h3>Data: {{event.data}}</h3>
        <h3>Price: {{event.price}}</h3>
        <h3>Image: {{event.imageUrl}}</h3>
        <h3>Adress: {{event.location.adress}}</h3>
        <h3>City: {{event.location.city}}</h3>
        <h3>Country: {{event.location.country}}</h3>
    </div>
    `
})

export class EventThumbnailComponent{
    /* INPUT È UN DECORATORE CHE DICE AD
    ANGULAR CHE QUESTO EVENTO VERRA' PASSATO
    AD UN ALTRO COMPONENTE */
    @Input() event: any
}