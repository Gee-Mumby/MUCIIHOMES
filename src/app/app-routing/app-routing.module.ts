import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomesComponent } from '../homes/homes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeDetailComponent } from '../homes/home-detail/home-detail.component'; 

const routes: Routes = [{ path: 'homes', component: HomesComponent },
{ path: 'dashboard', component: DashboardComponent },{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, { path: 'detail/:id', component: HomeDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}