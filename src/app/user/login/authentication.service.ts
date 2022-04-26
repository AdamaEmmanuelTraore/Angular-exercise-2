import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of } from "rxjs";
import { IUser } from "../user.model";

// IN QUESTO COMPONENTE IMPLENENTO LA LOGICA PER LA LOGIN

@Injectable()
export class AuthenticationService {
    currentUser!: IUser

    constructor(private http: HttpClient) {

    }

    loginUser(userName: string, password: string) {

        let loginInfo = {username: userName, password: password}
        let options: any = {Headers: new HttpHeaders({'Content-Type': 'application/json'})} // SERVE A CREARE DELLE OPZIONI

        this.http.post('/api/login', loginInfo, options)
        .pipe(tap(data => {
            this.currentUser = <IUser>data['user']
        }))
        .pipe(catchError(err => {
            return of(false)
        }))
    }

    isAuthenticated() {
        return !!this.currentUser
    }
    
    updateCurrentUser(firstName:string, lastName:string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}

function tap(arg0: (data: any) => void): import("rxjs").OperatorFunction<ArrayBuffer, unknown> {
    throw new Error("Function not implemented.");
}
