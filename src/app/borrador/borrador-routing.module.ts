import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorradorPage } from './borrador.page';

const routes: Routes = [
  {
    path: '',
    component: BorradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorradorPageRoutingModule {}
