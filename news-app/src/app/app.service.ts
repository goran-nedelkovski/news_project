//I create this service for centralize and manage all the business logic
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// export interface Source {
//     id: string;
//     name: string;
// }

export interface Article {
    source: {
        id:string,
        name:string
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface RootObject {
    status: string;
    totalResults: number;
    articles: Article[];
}

//I add @Injectable() decorator to inject http service into this service
@Injectable({providedIn:'root'}) //{providedIn:'root'} is the same as provide this in app.module.ts in providers:[] array
export class AppService {
    //inject HttpClient service here in the constructor
    constructor(private http:HttpClient) {}
//I will add this method fetchNews() and in there I will use http.get() request to the api endpoint and return this observable
    fetchNews() {
         return this.http.get<RootObject>('https://newsapi.org/v2/everything?q=bitcoin&apiKey=b6854cafe4dc41db988a6f24d62bd5ab');
    }
}