// COMPONENTE FIGLIO
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./service/event.model";
import { EventService } from "./service/event.service";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="infos">
        <div><h1>{{event.name | uppercase}}</h1></div>
        <div>Data: {{event?.date | date: 'd/M/y'}}</div>
   
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late start)</span>
            <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div>Price: {{event?.price | currency: 'USD'}}</div>
        <div>Adress: {{event.location?.address}}</div>
        <div>City: {{event.location?.city}}</div>
        <div>Country: {{event.location?.country}}</div>
        <div><button (click)="clickMe()">Click!</button></div>
        <div><button (click)="deleteMe()">Delete</button></div>
    </div>
    `
})

export class EventThumbnailComponent{
    /* INPUT È UN DECORATORE CHE DICE AD ANGULAR CHE QUESTO EVENTO VERRA' PASSATO AD UN ALTRO COMPONENTE */
    @Input() event!: IEvent
    eventx!: IEvent[]
    @Output() clicked = new EventEmitter()
    isDirty:boolean = true

    constructor(private service: EventService) {

    }

    getStartTimeClass(): any {
        if(this.event && this.event.time=== "8:00 am"){
            return ["rd", "b"]
        } else if(this.event && this.event.time=== "9:00 am") {
            return ["org", "b"]
        } else if(this.event && this.event.time=== "10:00 am"){
            return ["gr", "b"]
        }
    }
    clickMe() {
        this.clicked.emit(this.event.name)
    }
    deleteMe() {

    }
}