import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedalsComponent } from './pedals/pedals.component';

const routes: Routes = [{ path: 'pedals', component: PedalsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
