import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProfePageRoutingModule } from './home-profe-routing.module';
import { LoginProfeComponent } from '../components/login-profe/login-profe.component';

import { HomeProfePage } from './home-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfePageRoutingModule
  ],
  declarations: [HomeProfePage, LoginProfeComponent]
})
export class HomeProfePageModule {}
