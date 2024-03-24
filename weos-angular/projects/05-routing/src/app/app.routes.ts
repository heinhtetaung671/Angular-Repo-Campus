import { Routes } from '@angular/router';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ParentThreeComponent } from './parent-three/parent-three.component';
import { PageNotFoundComponent } from './utils/widgets/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'parent-one', component: ParentOneComponent },
  { path: 'parent-two', component: ParentTwoComponent },
  { path: 'parent-three', component: ParentThreeComponent },
  { path: '', redirectTo: '/parent-one', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
