import { Component, OnInit } from '@angular/core';
import { AppService, Article } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  articles:Article[] = [];
  //inject App Service here in the constructor()
  constructor(private appService:AppService) {}
  ngOnInit() {
  //here in ingOnInit I will subscribe to the Observable from the service to take its value
      this.appService.fetchNews().subscribe(
        data => {
            this.articles = data["articles"];
            console.log(data.articles);
        }
      );
  }
}

//Api key: b6854cafe4dc41db988a6f24d62bd5ab