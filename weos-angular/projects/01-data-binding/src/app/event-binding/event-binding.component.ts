import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent {

  num: number = Number.parseInt((Math.random() * 100).toString())

  myStyle = {
    border: '1px solid red',
    padding: '1.2rem',
    borderLeft: '5px solid red'
  }

  myClassObj = {}

}
