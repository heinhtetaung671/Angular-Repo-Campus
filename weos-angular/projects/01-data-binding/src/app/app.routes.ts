import { Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

export const routes: Routes = [
   {path: 'attribute', component: AttributeBindingComponent, title: 'AttributeBindingComponent | Angular'},
   {path: 'event', component: EventBindingComponent, title: 'EventBindingComponent | Angular'},
   {path: 'two-way', component: TwoWayBindingComponent, title: 'TwoWayBindingComponent | Angular'},
   {path: '', redirectTo: '/attribute', pathMatch: 'full'}
];
