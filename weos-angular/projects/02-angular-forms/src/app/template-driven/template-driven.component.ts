import { Component } from '@angular/core';
import { birthYears } from '../model/birthYear';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../model/data/student';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
  styles: ``,
})
export class TemplateDrivenComponent {
  list: Student[] = [];
  years: number[] = birthYears();
}
