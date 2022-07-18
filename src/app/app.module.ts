import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgParticlesModule } from 'ng-particles'; 



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       /* other imports */
   NgParticlesModule // NgParticlesModule is required
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }