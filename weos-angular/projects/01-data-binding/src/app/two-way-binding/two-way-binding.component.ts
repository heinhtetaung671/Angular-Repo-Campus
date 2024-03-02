import { Component } from '@angular/core';
import { User } from '../model/data/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html'
})
export class TwoWayBindingComponent {

  user: User = {
    name: 'Ro',
    phone: '+9588888888',
    gender: 'Male'
  }

  genderArray: ['Male', 'Female', 'Other'] = ['Male', 'Female', 'Other']

  saveData(name: string, phone: string, gender: string) {
    this.user.name = name;
    this.user.phone = phone;
    this.user.gender = gender as 'Male' | 'Female' | 'Other';
  }

  convertGender(gender: string): 'Male' | 'Female' | 'Other' {
    return gender as 'Male' | 'Female' | 'Other'
  }

}
