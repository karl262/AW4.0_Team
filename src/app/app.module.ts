import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './features/profile/profile.component';
import { ConfigurationComponent } from './features/configuration/configuration.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from "@angular/material/card";
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { ChartsComponent } from './features/charts/charts.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Importa MatDatepickerModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    ConfigurationComponent,
    ChartsComponent,
    TasksComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    MatGridTile,
    MatIcon,
    MatGridList,
    MatToolbar,
    MatIconButton,
    MatSidenav,
    MatNavList,
    MatSidenavContent,
    MatSidenavContainer,
    MatListItem,
    MatButton,
    MatDatepickerModule, // Añade MatDatepickerModule a los imports
    MatInputModule, // Añade MatInputModule a los imports
    MatNativeDateModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }