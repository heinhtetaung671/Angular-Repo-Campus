import { Route, Routes } from '@angular/router';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ParentThreeComponent } from './parent-three/parent-three.component';
import { PageNotFoundComponent } from './utils/widgets/page-not-found/page-not-found.component';
import { ThreeChileOneComponent } from './parent-three/three-chile-one/three-chile-one.component';
import { ThreeChileTwoComponent } from './parent-three/three-chile-two/three-chile-two.component';

const blankRoute : Route =  {path: '', redirectTo: '/parent-three/three-chile-one', pathMatch: 'full'};

export const routes: Routes = [
  { path: 'parent-one', component: ParentOneComponent },
  { path: 'parent-two', component: ParentTwoComponent },
  { path: 'parent-three', component: ParentThreeComponent, children: [
    {path: 'three-chile-one', component: ThreeChileOneComponent},
    {path: 'three-chile-two', component: ThreeChileTwoComponent},
    blankRoute
  ] },
  { path: '', redirectTo: '/parent-one', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
