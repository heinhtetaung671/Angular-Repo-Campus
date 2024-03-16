import { Component } from "@angular/core";
import { InputParentComponent } from "./input-parent/input-parent.component";

@Component({
   template: `<app-input-parent/>`,
   standalone: true,
   imports: [InputParentComponent]
})
export class InputComponent {

}