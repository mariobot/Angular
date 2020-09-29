import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroToServicesComponent } from './intro-to-services/intro-to-services.component';
import { GetDemoComponent } from './get/get-demo/get-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroToServicesComponent,
    GetDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
