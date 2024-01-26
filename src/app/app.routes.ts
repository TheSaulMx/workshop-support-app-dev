import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterEquipmentComponent } from './components/register-equipment/register-equipment.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'register-equipment', component: RegisterEquipmentComponent}
];
