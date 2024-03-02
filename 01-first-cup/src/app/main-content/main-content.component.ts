import { Component } from "@angular/core";

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    standalone: true
})
export class MainContentComponent{
    counter = 0;

    minus(){
        this.counter--;
    }

    reset(){
        this.counter = 0;
    }

    plus(){
        this.counter++;
    }
}
