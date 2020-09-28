import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  templateUrl: './event-binding-demo.component.html',
  styleUrls: ['./event-binding-demo.component.css']
})
export class EventBindingDemoComponent implements OnInit {

  constructor() { }

  sumatoria = 0;

  ngOnInit(): void {
  }

}
