import { Component } from "@angular/core";
import { AuthenticationService } from "../user/login/authentication.service";

@Component ({
    selector: `nav-bar`,
    templateUrl: `./navbar.component.html`
})

export class NavbarComponent {
    constructor(public auth: AuthenticationService) {
        
    }
}