import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { BotonPanicoComponent } from '../boton-panico/boton-panico.component';

const routes: Routes = [
  { path: 'panico', component: BotonPanicoComponent, outlet: 'popup' },
  { path: 'usuarios/:id/posts', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
