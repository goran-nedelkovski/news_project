import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //I need first to import HttpClientModule (which provide the HttpClient service for communication with API) here in app.module.ts 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
