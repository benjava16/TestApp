import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaProfPage } from './vista-prof.page';

const routes: Routes = [
  {
    path: '',
    component: VistaProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaProfPageRoutingModule {}
