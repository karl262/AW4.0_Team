import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import { ImageCardComponent } from './image-card/image-card.component';



@NgModule({
  declarations: [
  NavbarComponent,
  FooterComponent,
  ImageCardComponent
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
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ImageCardComponent
  ]
})
export class SharedModule { }
