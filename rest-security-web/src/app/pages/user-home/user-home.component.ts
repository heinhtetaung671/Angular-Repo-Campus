import { Component, signal } from '@angular/core';
import { LoginUser, SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styles: ``
})
export class UserHomeComponent {

  loginUser = signal<any>(undefined);

  constructor(service: SecurityService){
    if(!service.loginUser){

    } else{
      this.loginUser.set(service.loginUser)
    }
  }

}
