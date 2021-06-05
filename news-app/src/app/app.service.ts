// //I create this service for centralize and manage all the business logic
// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";

// // export interface Source {
// //     id: string;
// //     name: string;
// // }
// export interface Article {
//     source: {
//         id:string;
//         name:string;
//     };
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: string;
// }

// export interface RootObject {
//     status: string;
//     totalResults: number;
//     articles: Article[];
// }

// export interface Source {
//     id: string;
//     name: string;
//     description: string;
//     url: string;
//     category: string;
//     language: string;
//     country: string;
// }
// export interface SourceObject {
//     status: string;
//     sources: Source[];
// }

// //I add @Injectable() decorator to inject http service into this service
// @Injectable({providedIn:'root'}) //{providedIn:'root'} is the same as provide this in app.module.ts in providers:[] array
// export class AppService {
//     //inject HttpClient service here in the constructor
//     constructor(private http:HttpClient) {}
// //I will add these methods and in there I will use http.get() requests to the api endpoints and return this observables
//     // fetchTopHeadlines() {
//     //     return this.http.get<RootObject>('https://newsapi.org/v2/top-headlines?country=us&apiKey=b6854cafe4dc41db988a6f24d62bd5ab');
//     // }
//     // fetchSources() {
//     //     return this.http.get<SourceObject>('https://newsapi.org/v2/sources?apiKey=b6854cafe4dc41db988a6f24d62bd5ab');
//     // }
// // //1.here in my http.get() request to this api-endpoint (in the end the url-with Template literal syntax), I will pass as parameters page=${page}&pageSize=10 //where page is the current page(dinamic parameter from the function)
// //     fetchEverything(page:number) {
// //          return this.http.get<RootObject>(`https://newsapi.org/v2/everything?q=bitcoin&page=${page}&pageSize=10&sortBy=publishedAt&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
// //     }
// }