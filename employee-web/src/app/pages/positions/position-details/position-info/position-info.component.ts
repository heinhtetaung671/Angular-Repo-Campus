import { Component, input } from '@angular/core';
import { WidgetsModule } from '../../../../widgets/widgets.module';

@Component({
  selector: 'app-position-info',
  standalone: true,
  imports: [WidgetsModule],
  templateUrl: './position-info.component.html',
  styles: ``
})
export class PositionInfoComponent {
  data = input.required<any>();
}
