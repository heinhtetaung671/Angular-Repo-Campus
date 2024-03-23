import { Component, input } from '@angular/core';
import { WidgetsModule } from '../../../../widgets/widgets.module';

@Component({
  selector: 'app-position-employee',
  standalone: true,
  imports: [WidgetsModule],
  templateUrl: './position-employee.component.html',
  styles: ``
})
export class PositionEmployeeComponent {
  employees = input.required<any>()
}
