import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Employee } from '../../model/data/employee';

@Component({
  selector: 'app-input-parent',
  standalone: true,
  imports: [InputChildComponent, ReactiveFormsModule],
  templateUrl: './input-parent.component.html',
  styles: ``,
})
export class InputParentComponent {
  empForm!: FormGroup;
  dataToSend: Employee[] = [];

  constructor(fb: FormBuilder) {
    this.empForm = fb.group({
      name: new FormControl('', Validators.required),
      salary: new FormControl(0, Validators.min(150000)),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      type: fb.array([
        fb.control({part: ''}),
        fb.control({daily: ''}),
        fb.control({contract: ''})
      ]),
    });
  }

  get name() {
    return this.empForm.controls['name'] as FormControl;
  }

  get salary() {
    return this.empForm.controls['salary'] as FormControl;
  }

  get email() {
    return this.empForm.controls['email'] as FormControl;
  }
  get phone() {
    return this.empForm.controls['phone'] as FormControl;
  }

  saveData(){
    if(this.empForm.valid){
      this.dataToSend.push(this.empForm.value)
    }
  }

}
