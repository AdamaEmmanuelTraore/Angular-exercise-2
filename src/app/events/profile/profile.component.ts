import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  isDirty: boolean = true
  profileForm!: FormGroup;
  constructor(private router: Router) {

  }

  ngOnInit() {
    let firstName = new FormControl()
    let lastName = new FormControl()
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  stop() {
      this.router.navigate(['/events'])
  }
}