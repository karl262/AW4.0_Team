import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  user = {
    name: 'Doctor Murphy',
    email: 'murphy.doctor@example.com',
    phone: '+52 123 456 7890',
    address: 'Calle 8 123, CDMX',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
