import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterEquipmentComponent } from './components/register-equipment/register-equipment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarTopComponent, DashboardComponent, RegisterEquipmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workshop-support-app-dev';
}
