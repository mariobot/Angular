import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  imprimir(mensaje : string){
    alert(mensaje);
  }
}
