import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  isDirty: boolean = true
  profileForm!: FormGroup
  constructor(private authenticate: AuthenticationService, private router: Router) {

  }

  // VISUALIZZERO' IL NOME E COGNOME NELLE CASELLE NELLA SESSIONE PROFILE
  ngOnInit() {
    let firstName = new FormControl(this.authenticate.currentUser.firstName)
    let lastName = new FormControl(this.authenticate.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
  stop() {
      this.router.navigate(['/events'])
  }
  saveProfile(formValues: { firstName: string; lastName: string; }) {
    this.authenticate.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['/events'])
  }
}