import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
    selector: 'app-hola',
    standalone: true,
    imports: [AsyncPipe],
    template: `
        {{mensaje$ | async}}
    `
})
export class HolaComponent{
    public mensaje$ = of('Hola! soy un mensaje async')
}
