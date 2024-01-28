import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from '../homes/homes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{ path: 'homes', component: HomesComponent },
{ path: 'dashboard', component: DashboardComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}