import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  templateUrl: './ng-class-demo.component.html',
  styleUrls: ['./ng-class-demo.component.css']
})
export class NgClassDemoComponent implements OnInit {

  constructor() { }

  colorCheck = false;
  tamanoCheck = false;

  ngOnInit(): void {
  }

}
