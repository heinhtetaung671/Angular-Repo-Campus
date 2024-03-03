import { Component } from '@angular/core';
import { WidgetsModule } from '../../../widgets/widgets.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './department-edit.component.html',
  styles: ``,
})
export class DepartmentEditComponent {
  form!: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: ''
    })
  }
}
