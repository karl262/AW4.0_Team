import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: false
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  ngAfterViewInit() {
    if (this.sidenav) {
      console.log('Sidenav inicializado correctamente');
    }
  }

  selectedDate: Date = new Date(); // Fecha seleccionada por defecto

}
