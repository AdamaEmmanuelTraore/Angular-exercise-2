import { ThisReceiver } from "@angular/compiler";
import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../service/event.model";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions!: ISession[]
    @Input() filterBy!: string
    @Input() sortBy!: string
    visibleSessions: ISession[] = []

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy) // QUI FILTRO LE SESSIONI
            this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) // QUI ORDINO LE SESSIONI
            : this.visibleSessions.sort(this.sortByVotesDesc)
        }
    }
    // METODO PER FILTRARE
    filterSessions(filter: any) {
        if(filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })
        }
    }
    // METODO PER ORDINARE
    sortByNameAsc(s1: ISession, s2: ISession) {
        if(s1.name > s2.name) {
            return 1
        } else if(s1.name === s2.name) {
            return 0
        } else return -1
    }
    sortByVotesDesc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length
    }
}