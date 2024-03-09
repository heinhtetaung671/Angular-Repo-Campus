import { Component } from '@angular/core';
import { birthYears } from '../model/birthYear';
import {
  FormArray,
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
      contact: {
        phone: '',
        email: 'hein@gmail.com'
      },
      gender: 'Male',
      mark: 120,
      subjects: ['Myanmar']
    },
  ];
  cache: Student | undefined;
  form: FormGroup;
  years: number[] = birthYears();

  get newFormGroup(){
    return new FormGroup({
      name: new FormControl('', Validators.required),
      birthYear: new FormControl(0, Validators.required),
      contact: new FormGroup({
        phone: new FormControl(),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      gender: new FormControl('male', Validators.required),
      mark: new FormControl(0, [Validators.required, Validators.min(100)]),
      subjects: new FormArray([
        new FormControl('', Validators.required)
      ])
    });
  }

  constructor() {
    this.form = this.newFormGroup;
  }

  get subjectFormArray(): FormArray {
    return this.form.get('subjects') as FormArray;
  }

  getControls(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl ;
  }

  get name(){
    return this.getControls('name');
  }

  get phone(){
    return this.getControls('contact').get('phone') as FormControl;
  }

  get email(){
    return this.getControls('contact').get('email') as FormControl;
  }

  clearForm() {
    this.form = this.newFormGroup;
  }

  addSubjectInput(){
    if(this.subjectFormArray.length <= 6)
      this.subjectFormArray.push(new FormControl('', Validators.required))
  }

  removeSubjectInput(index: number){
    this.subjectFormArray.removeAt(index);
  }

  add(student: Student) {
    if (this.cache) {
      let index: number = this.students.findIndex((value) => value.contact.email == this.cache!.contact.email);
      this.students[index] = student;
    } else {
      if (this.form.valid) {
        this.students.push(student);
      }
    }

    this.cache = undefined;
    this.clearForm();
  }

  displayValue(student: Student) {

    this.subjectFormArray.clear();

    for(let i = 0; i < student.subjects!.length ; i++){
      this.addSubjectInput()
    }

    this.cache = student;
    this.form.setValue(student);
  }
}
