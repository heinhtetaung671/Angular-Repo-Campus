import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PropertiesComponent } from './properties/properties.component';
import { InputComponent } from './input/input.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles: [],
  imports: [MainContentComponent,PropertiesComponent, InputComponent, TemplateRefComponent]
})
export class AppComponent {
  title = '01-first-cup';
}
