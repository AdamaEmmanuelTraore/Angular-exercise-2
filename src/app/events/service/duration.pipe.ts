import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'duration'})

export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        switch(value) {
            case 1: 'Half Hour'
            case 2: 'One Hour'
            case 3: 'Half Day'
            case 4: 'Full Hour'
            default: return value.toString();
        }
    }
}