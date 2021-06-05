import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllNewsComponent } from './all-news/all-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { NewsApiService } from './service/news-api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    BusinessNewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, //I need first to import HttpClientModule (which provide the HttpClient service for communication with API) here in app.module.ts 
    InfiniteScrollModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

