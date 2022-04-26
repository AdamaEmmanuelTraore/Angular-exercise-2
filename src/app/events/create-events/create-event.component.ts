import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { EventService } from "../service/event.service";

@Component({
    templateUrl: `./create-event.component.html`
})
// QUI AGGIUNGO UN METODO AL MIO PULSANTE "CANCEL" AL QUALE PASSO IL "ROUTER" PER POTER NAVIGARE IN UN ALTRA PAGINA
export class CreateEventComponent {
    isDirty:boolean = true
    newEvent: any
    public name!: FormControl
    public date!: FormControl
    public time!: FormControl
    public price!: FormControl
    public imageUrl!: FormControl

    constructor(private router: Router, private service: EventService) {

    }
    saveEvent(formValues: any) {
      this.service.SaveEvent(formValues).subscribe(() => {
        this.isDirty = false
        this.router.navigate(['/events'])
      })
    }

    stop() {
        this.router.navigate(['/events'])
    }
      // PER VISUALIZZARE GLI ERRORI
  validateName() {
    return this.name.valid || this.name.untouched
  }
  validateDate() {
    return this.date.valid || this.date.untouched
  }
  validateTime() {
    return this.time.valid || this.time.untouched
  }
  validatePrice() {
    return this.price.valid || this.price.untouched
  }
  validateImageUrl() {
    return this.imageUrl.valid || this.imageUrl.touched
  }

}