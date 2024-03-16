import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Employee } from '../../model/data/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-parent',
  standalone: true,
  imports: [InputChildComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './input-parent.component.html',
  styles: ``,
})
export class InputParentComponent {
  empForm!: FormGroup;
  dataToSend: Employee[] = [];
  employeeType = ['Part Time', 'Daily', 'Contract']

  constructor(fb: FormBuilder) {
    this.empForm = fb.group({
      name: ['', Validators.required],
      salary: [0, Validators.min(150000)],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      type: fb.array(this.employeeType.map(v => false)),
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

  get typeArray(){
    return this.empForm.controls['type'] as FormArray
  }

  saveData(){
    if(this.empForm.valid){
      this.dataToSend.push(this.empForm.value)
    }
  }

}
