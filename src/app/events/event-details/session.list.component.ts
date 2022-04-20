<<<<<<< HEAD
import { Component, Input } from "@angular/core";
import { ISession } from "../service/event.model";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions!: ISession[]
=======
import { Component, Input } from "@angular/core";
import { ISession } from "../service/event.model";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions!: ISession[]
>>>>>>> 7c87e947b023d7f910708edb23e9765c091def64
}