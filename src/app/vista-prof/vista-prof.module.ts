import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaProfPageRoutingModule } from './vista-prof-routing.module';


import { VistaProfPage } from './vista-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaProfPageRoutingModule
  ],
  declarations: [VistaProfPage]
})
export class VistaProfPageModule {}
