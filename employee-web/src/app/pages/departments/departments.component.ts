import { Component, effect, model } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    WidgetsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './departments.component.html',
  styles: ``
})
export class DepartmentsComponent {

  searchCode = model<string>();
  searchName = model<string>();

  constructor() {
    effect( () => {
      console.log(`Search Code is ${this.searchCode}`);
      console.log(`Search Name is ${this.searchName}`)
    })
  }
}
