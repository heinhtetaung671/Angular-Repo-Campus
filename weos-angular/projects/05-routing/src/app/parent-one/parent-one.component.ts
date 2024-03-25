import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-one',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './parent-one.component.html',
  styles: ``,
})
export class ParentOneComponent {

  routeParam: string | undefined;
  private subscription: Subscription | undefined;

  constructor(title: Title, meta: Meta, private route: ActivatedRoute,private router: Router) {
    title.setTitle('Parent One');
    meta.addTag({ author: 'Hein Htet Aung' });
    meta.addTag({ description: 'Angular Router for Single Page Application' });
  }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((param) => {
      if (param['id']) {
        this.routeParam = param['id']
      }
    });
  }

  ngOnDestory() {
    this.subscription?.unsubscribe;
  }

  updateParam(message: string) {
    this.router.navigate(['/parent-two'], {queryParams: {id: message}})
  }
}
