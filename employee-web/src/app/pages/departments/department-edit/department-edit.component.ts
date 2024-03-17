import { Component, signal } from '@angular/core';
import { WidgetsModule } from '../../../widgets/widgets.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../../service/department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [WidgetsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './department-edit.component.html',
  styles: ``,
})
export class DepartmentEditComponent {
  form!: FormGroup;
  edit = signal(false)

  constructor(builder: FormBuilder, private service: DepartmentService, route: ActivatedRoute, private router: Router) {
    this.form = builder.group({
      code: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: ''
    })

    route.queryParamMap.subscribe(params => {
      const code = params.get('code')
      if(code){
        this.edit.set(true)
        service.findById(code).subscribe(result => {
          const {hodCode, hodName, hodPhone, ... editForm} = result.payload
          this.form.patchValue(editForm)
        })
      }
    })

  }

  save() {
    if(this.form.valid){

      const request = this.edit() ? this.service.update(this.form.value) : this.service.create(this.form.value)
      request.subscribe(
        result => {
          if(result.success){
            this.router.navigate(['/departments', 'details'], {queryParams: {code: result.payload.id}})
          }
        }
      )
    }
  }

}
