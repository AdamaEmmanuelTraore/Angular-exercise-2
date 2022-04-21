import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../service/event.model";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions!: ISession[]
    @Input() filterBy!: string

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }
    filterSessions(filter: any) {
        if(filter === 'all') {

        } else {

        }
    }
}