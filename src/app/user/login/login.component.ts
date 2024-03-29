import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        .req{display: flex;
            float: center;
            color: red;
            margin-left: 110px
        }
        label{
            color: white;
        }
    `]
})
export class LoginComponent {
    userName: any
    password: any
    loginInvalid = false

    constructor(private authenticate: AuthenticationService, private router: Router) {

    }
    
    login(formValues: any) {
        this.authenticate.loginUser(formValues.userName, formValues.passaword)
        .subscribe((resp: any) => {
            if(!resp) {
                this.loginInvalid = true
            } else {
                this.router.navigate(['user/profile'])
            }
        })
    }
    stop() {
        this.router.navigate(['events'])
    }
}