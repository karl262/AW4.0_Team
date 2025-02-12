import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidebarService} from '../../core/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(public sidebarService: SidebarService) {}

  toggleSidenav() {
    this.sidebarService.toggleSidebar();
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;


}
