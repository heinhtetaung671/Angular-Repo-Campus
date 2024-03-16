import { Component, Input } from '@angular/core';
import { Employee } from '../../model/data/employee';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styles: ``
})
export class InputChildComponent {

  @Input()
  employees: Employee[] = [];

}
