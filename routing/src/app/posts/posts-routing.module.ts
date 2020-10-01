import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { BotonPanicoComponent } from '../boton-panico/boton-panico.component';
import { CanActivateGuard } from '../can-activate.guard';

const routes: Routes = [
  { path: 'panico', component: BotonPanicoComponent, outlet: 'popup', canActivate: [CanActivateGuard] },
  { path: 'usuarios/:id/posts', component: PostsComponent, canActivate: [CanActivateGuard]  },
  { path: 'posts', component: PostsComponent, canActivate: [CanActivateGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
