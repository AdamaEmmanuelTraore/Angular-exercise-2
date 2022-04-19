import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

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
}