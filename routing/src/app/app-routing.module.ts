import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CanActivateGuard } from './can-activate.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent, canActivate: [CanActivateGuard] },
  { path: '**', redirectTo: 'usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
