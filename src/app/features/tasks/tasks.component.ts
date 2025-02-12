import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  tasks = [
    { title: 'Revisión de Pacientes', completed: false },
    { title: 'Llamar a Proveedores', completed: true },
    { title: 'Actualizar Historias Clínicas', completed: false },
    { title: 'Revisión de Equipos', completed: true }
  ];

  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

}
