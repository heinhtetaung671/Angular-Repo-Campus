import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [],
  templateUrl: './attribute-binding.component.html'
})
export class AttributeBindingComponent {

  minValue = 0;
  maxValue = 100;
  currentValue = 0;

}
