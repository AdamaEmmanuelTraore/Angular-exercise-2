// COMPONENTE FIGLIO
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="info">
        <div><h1>{{event.name}}</h1></div>
        <div>Data: {{event?.data}}</div>
        <div [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late start)</span>
            <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div>Price: {{event?.price}}</div>
        <div>Image: {{event?.imageUrl}}</div>
        <div>Adress: {{event?.location.address}}</div>
        <div>City: {{event?.location.city}}</div>
        <div>Country: {{event?.location.country}}</div>
    </div>
    `
})

export class EventThumbnailComponent{
    /* INPUT È UN DECORATORE CHE DICE AD ANGULAR CHE QUESTO EVENTO VERRA' PASSATO AD UN ALTRO COMPONENTE */
    @Input() event: any
}