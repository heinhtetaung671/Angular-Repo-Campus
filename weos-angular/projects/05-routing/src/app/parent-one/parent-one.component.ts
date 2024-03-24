import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-parent-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-one.component.html',
  styles: ``
})
export class ParentOneComponent {

  constructor(title: Title, meta: Meta){
    title.setTitle('Parent One');
    meta.addTag({author: 'Hein Htet Aung'});
    meta.addTag({description: 'Angular Router for Single Page Application'});
  }

}
