import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: any
    password: any

    constructor(private authenticate: AuthenticationService, private router: Router) {

    }
    
    login(formValues: any) {
        this.authenticate.loginUser(formValues.userName, formValues.passaword)
        this.router.navigate(['user/profile'])
    }
    stop() {
        this.router.navigate(['events'])
    }
}