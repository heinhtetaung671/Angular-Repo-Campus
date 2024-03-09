import { Component } from '@angular/core';
import { birthYears } from '../model/birthYear';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../model/data/student';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styles: ``,
})
export class ReactiveComponent {
  students: Student[] = [
    {
      name: 'hein htet aung',
      birthYear: 2006,
      phone: '',
      email: 'hein@gmail.com',
      gender: 'Male',
      mark: 120,
    },
  ];
  cache!: Student;
  form: FormGroup;
  years: number[] = birthYears();

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      birthYear: new FormControl('', Validators.required),
      phone: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('male', Validators.required),
      mark: new FormControl(0, [Validators.required, Validators.min(100)]),
    });
  }

  get controls() {
    return this.form.controls;
  }

  clearForm() {
    this.form.setValue({
      name: '',
      birthYear: '',
      phone: '',
      email: '',
      gender: '',
      mark: '',
    });
  }

  add(student: Student) {
    if (this.cache) {
      let index: number = this.students.findIndex((value) => value.email == this.cache.email);
      this.students[index] = student;
    } else {
      if (this.form.valid) {
        this.students.push(student);
      }
    }

    this.clearForm();
  }

  displayValue(student: Student) {
    this.cache = student;
    this.form.setValue(student);
  }
}
