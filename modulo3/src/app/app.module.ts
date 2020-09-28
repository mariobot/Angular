import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo.component';
import { NgClassDemoComponent } from './ng-class-demo/ng-class-demo.component';
import { NgStyleDemoComponent } from './ng-style-demo/ng-style-demo.component';
import { NgModelTextoComponent } from './ng-model-texto/ng-model-texto.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgSwitchDemoComponent } from './ng-switch-demo/ng-switch-demo.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingDemoComponent,
    PropertyBindingDemoComponent,
    NgClassDemoComponent,
    NgStyleDemoComponent,
    NgModelTextoComponent,
    NgIfDemoComponent,
    NgForDemoComponent,
    NgSwitchDemoComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
