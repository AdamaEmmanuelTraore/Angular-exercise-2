import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  isDirty: boolean = true
  profileForm!: FormGroup
  private firstName!: FormControl
  private lastName!: FormControl;
  constructor(private authenticate: AuthenticationService, private router: Router) {

  }

  // VISUALIZZERO' IL NOME E COGNOME NELLE CASELLE NELLA SESSIONE PROFILE
  ngOnInit() {
    this.firstName = new FormControl(this.authenticate.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.authenticate.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
  stop() {
      this.router.navigate(['/events'])
  }
  saveProfile(formValues: { firstName: string; lastName: string; }) {
    if(this.profileForm.valid) {
      this.authenticate.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['/events'])
    }
  }
  // PER VISUALIZZARE GLI ERRORI
  validateFirstName() {
    return this.firstName.invalid || this.firstName.untouched
  }
  validateLastName() {
    return this.lastName.invalid || this.lastName.untouched
  }
}