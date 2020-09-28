import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-texto',
  templateUrl: './ng-model-texto.component.html',
  styleUrls: ['./ng-model-texto.component.css']
})
export class NgModelTextoComponent implements OnInit {

  constructor() { }

  texto : string;

  ngOnInit(): void {
  }

}
