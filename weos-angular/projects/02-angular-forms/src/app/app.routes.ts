import { Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

export const routes: Routes = [
   {
      path: 'template',
      component: TemplateDrivenComponent,
      title: 'Template Driven Form'
   },
   {
      path: 'reactive',
      component: ReactiveComponent,
      title: 'Reactive Form'
   },
   {
      path: '',
      redirectTo: '/template',
      pathMatch: 'full'
   }
];

