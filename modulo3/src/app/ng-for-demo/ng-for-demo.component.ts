import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit {

  constructor() { }

  personas : any[] = [
    {nombre: "Mauricion", edad: 34},
    {nombre: "Carolina", edad:25},
    {nombre: "Fernanda", edad:30},  
  ];

  ngOnInit(): void {
  }

}
