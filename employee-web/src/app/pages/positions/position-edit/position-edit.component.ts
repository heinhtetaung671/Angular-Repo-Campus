import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PositionService } from '../../../service/position.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from '../../../widgets/widgets.module';

@Component({
  selector: 'app-position-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, WidgetsModule],
  templateUrl: './position-edit.component.html',
  styles: ``,
})
export class PositionEditComponent {
  form: FormGroup;
  edit = signal<boolean>(false);

  constructor(
    builder: FormBuilder,
    private service: PositionService,
    route: ActivatedRoute,
    private router: Router
  ) {
    this.form = builder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      basicSalary: [0, Validators.required],
      otPerHour: [0, Validators.required],
      remark: '',
    });

    route.queryParamMap.subscribe((params) => {
      const code = params.get('code');

      if (code) {
        this.edit.set(true);

        service.findById(code).subscribe((result) => {
          if (result.success) {
            const { employees, ...updateData } = result.payload;
            this.form.patchValue(updateData);
          }
        });
      }
    });
  }

  save() {
    if (this.form.valid) {
      const request = this.edit()
        ? this.service.update(this.form.value)
        : this.service.create(this.form.value);

      request.subscribe((result) => {
        if (result.success) {
          this.router.navigate(['/positions', 'details'], {
            queryParams: { code: result.payload.id },
          });
        }
      });
    }
  }
}
