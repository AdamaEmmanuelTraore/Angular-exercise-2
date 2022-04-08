// COMPONENTE FIGLIO
import { NgSwitchDefault } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

declare let toastr: any
@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="info">
        <div><h1>{{event.name}}</h1></div>
        <div>Data: {{event?.data}}</div>
   
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late start)</span>
            <span *ngSwitchDefault="'9:00 am'">(Normal start)</span>
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

    getStartTimeClass(): any {
        if(this.event && this.event.time=== "8:00 am"){
            return ["rd", "b"]
        } else if(this.event && this.event.time=== "9:00 am") {
            return ["org", "b"]
        } else if(this.event && this.event.time=== "10:00 am"){
            return ["gr", "b"]
        }
    }
}