import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
// import { ConfirmGuard } from '../guards/confirm.guard';

const routes: Routes = [
  // { path: 'stock', component: ListComponent, canActivate: [ConfirmGuard] },
  { path: 'stock', component: ListComponent },
  { path: 'stock/new', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
