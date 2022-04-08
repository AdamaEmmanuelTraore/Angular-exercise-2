// COMPONENTE FIGLIO
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="info">
        <div><h1>{{event.name}}</h1></div>
        <div><h3>Data: {{event?.data}}</h3></div>
        <div [ngSwitch]="event?.time">
            <h3>Time: {{event?.time}}</h3>
            <h3><span *ngSwitchCase="'8:00 am'">(Early start)</span></h3>
            <h3><span *ngSwitchCase="'10:00 am'">(Late start)</span></h3>
            <h3><span *ngSwitchDefault>(Normal start)</span></h3>
        </div>
        <div><h3>Price: {{event?.price}}</h3></div>
        <div><h3>Image: {{event?.imageUrl}}</h3></div>
        <div><h3>Adress: {{event?.location.address}}</h3></div>
        <div><h3>City: {{event?.location.city}}</h3></div>
        <div><h3>Country: {{event?.location.country}}</h3></div>
    </div>
    `
})

export class EventThumbnailComponent{
    /* INPUT È UN DECORATORE CHE DICE AD ANGULAR CHE QUESTO EVENTO VERRA' PASSATO AD UN ALTRO COMPONENTE */
    @Input() event: any
}