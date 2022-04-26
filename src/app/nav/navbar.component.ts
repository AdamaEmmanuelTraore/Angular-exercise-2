import { Component } from "@angular/core";
import { ISession } from "../events/service/event.model";
import { EventService } from "../events/service/event.service";
import { AuthenticationService } from "../user/login/authentication.service";

@Component ({
    selector: `nav-bar`,
    templateUrl: `./navbar.component.html`
})

export class NavbarComponent {
    searchTerm: string = " "
    foundSessions!: ISession[]
    constructor(public auth: AuthenticationService, private service: EventService) {
        
    }

    searchSessions(searchTerm: string) {
        this.service.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions
        })
    }
}