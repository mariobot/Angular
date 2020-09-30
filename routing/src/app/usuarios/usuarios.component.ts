import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from '../services/web-api.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private router: Router, private serviceWebApi: WebApiService) { }

  usuarios : Usuario[];
  ngOnInit(): void {
    this.serviceWebApi.obtenerUsuarios().subscribe(
        (usuariosDelApi: Usuario[]) => this.usuarios = usuariosDelApi,
        error => console.error(error)
      );
  }

  navegarPosts(id : number){
    this.router.navigate(['/usuarios', id,'/posts']);
  }
}
