import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-notifications',
  standalone: false,
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  notifications = [
    { title: 'Cita confirmada', message: 'Tu cita con el fisioterapeuta ha sido confirmada.', read: false },
    { title: 'Nuevo mensaje', message: 'Tienes un nuevo mensaje del paciente Juan Pérez.', read: false },
    { title: 'Actualización de datos', message: 'Se ha actualizado la información de la clínica.', read: true }
  ];

  toggleSidenav() {
    this.sidenav.toggle();
  }

  markAsRead(index: number) {
    this.notifications[index].read = true;
  }

}
