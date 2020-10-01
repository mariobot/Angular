import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoViewChildComponent } from '../hijo-view-child/hijo-view-child.component';

@Component({
  selector: 'app-padre-view-child',
  templateUrl: './padre-view-child.component.html',
  styleUrls: ['./padre-view-child.component.css']
})
export class PadreViewChildComponent implements OnInit {

  @ViewChild(HijoViewChildComponent)
  componenteHijo : HijoViewChildComponent;

  constructor() { }

  texto : string;
  mensajeDeError : string;

  ngOnInit(): void {
  }

  enviarMensaje(){
    if(!this.texto)
    {
      this.mensajeDeError = "Debe escribir un mensaje primero";
    }
    else{
      this.mensajeDeError = '';
      this.componenteHijo.editarMensaje(this.texto);
    }
  }

}
