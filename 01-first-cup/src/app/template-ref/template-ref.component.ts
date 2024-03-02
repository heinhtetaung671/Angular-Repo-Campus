import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-ref.component.html',
  styles: ``
})
export class TemplateRefComponent {

  inputValue: unknown;
  showValue( ){
    console.log(this.inputValue)
  }
}
