import { Component, Input } from '@angular/core';
import { Employee } from '../../model/data/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-child.component.html',
  styles: ``
})
export class InputChildComponent {

  @Input()
  employees: Employee[] = [];

}
