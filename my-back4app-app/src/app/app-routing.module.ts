import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCarsComponent } from './my-cars/my-cars.component';

const routes: Routes = [{
  path: 'cars', component: MyCarsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
