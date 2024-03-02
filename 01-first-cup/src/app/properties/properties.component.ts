import { Component } from "@angular/core";

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    standalone: true
})
export class PropertiesComponent{

    props = "Hello Component Properties"
    date = new Date()
    add = (a: number) => (b: number) => a + b
}