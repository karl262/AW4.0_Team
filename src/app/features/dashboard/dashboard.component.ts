import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  stats = [
    { title: 'Nuevos Pacientes', value: 150, icon: 'person_add' },
    { title: 'Tasa de Recaída', value: '53%', icon: 'bar_chart' },
    { title: 'Citas Registradas', value: 44, icon: 'event' },
    { title: 'Pacientes Activos', value: 65, icon: 'groups' }
  ];

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
