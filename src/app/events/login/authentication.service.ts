import { Injectable } from "@angular/core";
import { IUser } from "../../user/user.model";

@Injectable()
export class AuthenticationService {
    currentUser!: IUser;
    loginUser(userName: string, passaword: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Paolo',
            lastName: 'rossi',
            userName: userName
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }
    updateCurrentUser(firstName:string, lastName:string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}