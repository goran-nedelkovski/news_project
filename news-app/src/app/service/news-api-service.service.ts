import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
export interface Article {
  source: {
      id:string;
      name:string;
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
// export interface Source {
//   id: string;
//   name: string;
//   description: string;
//   url: string;
//   category: string;
//   language: string;
//   country: string;
// }
// export interface SourceObject {
//   status: string;
//   sources: Source[];
// }
@Injectable()
export class NewsApiService {
  constructor(private http:HttpClient) { }
  //1.here in my http.get() request to this api-endpoint (in the end the url-with Template literal syntax), I will pass as parameters page=${page}&pageSize=10 //where page is the current page(dinamic parameter from the function)
  fetchEverything(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/everything?q=bitcoin&page=${page}&pageSize=10&sortBy=publishedAt&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
// call to /top-headlines?category=business
  fetchBusinessNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=business&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
// call to /top-headlines?category=entertainment
  fetchEntertainmentNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=entertainment&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
  // call to /top-headlines?category=general
  fetchGeneralNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=general&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
  // call to /top-headlines?category=health
  fetchHealthNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=health&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
  // call to /top-headlines?category=science
  fetchScienceNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=science&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
  // call to /top-headlines?category=sports
  fetchSportsNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=sports&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
  // call to /top-headlines?category=technology
  fetchTechnologyNews(page:number) {
    return this.http.get<RootObject>(`https://newsapi.org/v2/top-headlines?category=technology&page=${page}&pageSize=5&apiKey=b6854cafe4dc41db988a6f24d62bd5ab`);
  }
  

  
 
}
