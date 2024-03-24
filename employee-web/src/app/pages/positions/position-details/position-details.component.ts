import { Component, signal } from '@angular/core';
import { PositionService } from '../../../service/position.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../../../widgets/widgets.module';
import { PositionInfoComponent } from './position-info/position-info.component';

@Component({
  selector: 'app-position-details',
  standalone: true,
  imports: [CommonModule, RouterLink, WidgetsModule, PositionInfoComponent],
  templateUrl: './position-details.component.html',
  styles: ``,
})
export class PositionDetailsComponent {
  data = signal<any>({});
  employees = signal<any[]>([]);

  constructor(private service: PositionService, route: ActivatedRoute) {
    route.queryParamMap.subscribe((params) => {
      const code = params.get('code');
      if (code) {
        service.findById(code).subscribe(result => {
          if(result.success) {
            const {employees, ...positionData} = result.payload;
            this.data.set(positionData);
            this.employees.set(employees);
          }
        })
      }
    });
  }

}
