import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  standalone: true,
  imports: [],
  templateUrl: './parent-two.component.html',
  styles: ``
})
export class ParentTwoComponent {
  
  data!: string

  @Input()
  set id(name: string){
    this.data = name;
  }

}
