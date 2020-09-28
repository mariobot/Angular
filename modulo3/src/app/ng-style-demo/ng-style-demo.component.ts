import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  templateUrl: './ng-style-demo.component.html',
  styleUrls: ['./ng-style-demo.component.css']
})
export class NgStyleDemoComponent implements OnInit {

  constructor() { }
  
  colorCheck = false;
  anchuraAltura = 100;
  
  ngOnInit(): void {
  }

}
