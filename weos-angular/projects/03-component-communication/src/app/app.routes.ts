import { Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { TwowayComponent } from './two-way/twoway.component';



export const routes: Routes = [
  { path: 'input', component: InputComponent, title: 'Input Binding' },
  { path: 'output', component: OutputComponent, title: 'Output Binding' },
  { path: 'two-way', component: TwowayComponent, title: 'Two Way Binding' },
  { path: '', redirectTo: '/input', pathMatch: 'full' },
];
