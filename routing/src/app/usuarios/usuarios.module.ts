import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';


@NgModule({
  declarations: [UsuariosComponent],
  imports: [BrowserModule, UsuariosRoutingModule],
})
export class UsuariosModule {}
