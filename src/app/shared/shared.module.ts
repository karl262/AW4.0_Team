import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import { ImageCardComponent } from './image-card/image-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatListModule, MatNavList} from '@angular/material/list';
import {RouterLink} from '@angular/router';



@NgModule({
  declarations: [
  NavbarComponent,
  FooterComponent,
  ImageCardComponent,
  SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIcon,
    MatToolbarRow,
    MatToolbar,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatButtonModule,
    MatCardModule,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ImageCardComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
