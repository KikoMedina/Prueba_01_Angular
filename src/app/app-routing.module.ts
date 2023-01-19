import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedalsComponent } from './pedals/pedals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedalDetailComponent } from './pedal-detail/pedal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PedalDetailComponent },
  { path: 'pedals', component: PedalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
