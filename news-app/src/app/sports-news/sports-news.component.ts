import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
//import { Subscription } from 'rxjs';
import { Article, NewsApiService } from '../service/news-api-service.service';
@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit, AfterViewInit {

  @ViewChildren('theLastArticle', { read: ElementRef })
  theLastArticle: QueryList<ElementRef> | undefined;
  observer:any;
  //page:number;
  totalPages: number = 0;
  currentPage:number = 1;
  articles: Article[] = [];
  //topHeadlines: Article[] = [];
  searchText:string = '';
  //2.inject App Service here in the constructor()
  constructor(private service:NewsApiService,
    private spinner: NgxSpinnerService) { }
  ngOnInit() {
    //when the page/component is load in ngOnInit, we want to call getEverythinf() and call intersectionObserver() to check the intersectionObserver
    this.getHealthNews();
    this.intersectionObserver();
    //here in ingOnInit I will subscribe to the Observable from the service to take its value
    // this.appService.fetchTopHeadlines().subscribe(
    //   data => {
    //     this.topHeadlines = data["articles"];
    //     console.log(this.topHeadlines);
    //   }
    // );
    // this.appService.fetchSources().subscribe(
    //   data => {
    //     console.log(this.sources);
    //     this.sources = data["sources"];
    //     console.log(this.sources);
    //   }
    // ); 
  }
  //6.implement AfterViewInit and in ngAfterViewInit I will print theLastArticle (the lastg element).
  //6.So,now I know that this is my last El, and I need to use in the Intrsection Observer.lets create it
  ngAfterViewInit() {
    //console.log(this.theLastArticle)
    //11.in the end, I can install ngx-spinner and inject the spinner Service in the constructor.And then, when the page is load, then show the spinner
    this.spinner.show();
    //8.lets bind/use our intersection Observer in the last element here.so, whenever this thelastArticle changes (when this lastg el is ready tok go), then bind with our intersection Observer
    this.theLastArticle?.changes.subscribe( //8'.subscribe to that changes Observable to can take the last element
      (d) => { //8'.when we getg the last element 
          this.spinner.hide();
          console.log(d);
          //8''check if this is the last element (the last content of the article) then call our intersection observer with observe() and pass here as argument/bind this last element (to can watch this last element) 
          if(d.last) this.observer.observe(d.last.nativeElement);
          //8'' the callback we setup for the observer will be executed now for the first time
          //8'' it waits until we assign a target to our observer (even if the target is currently not visible)
      }
    );
  
  }
  //7.lets create an intersection Observer (from the intersection observer web Api)
  intersectionObserver() {
    let options = {
      root: null,  //root:null will be the whole window (everything)
      rootMargin: '0px',
      threshold: 0.5 //threshold is 50% view of the last Element
    }
  //7'.this options obj I will pass as 2nd argument of the newly created observer obj, and when I scroll down and when I see 50% of the last Element(when threshold property of the options ob fires), then fires this Callback function as 1st argument in the observer
    this.observer = new IntersectionObserver((entries) => {//entries is array of all intersection changes for all observes
      //7''the Callback as argument have entries and I can check if entries[0].isIntersecting, then I can scroll more
      //7.'Each entry describes an intersection change for one observed
      if(entries[0].isIntersecting) {
        //console.log('scroll');
      //7''.now I need to use/bind this Intersection Observer in my last Element.
      //7''first create a property observer and store our obj/instance in that property
      //9.here check if our currentPage(which is 0 at start) < totalPages, then increment the currentPages plus one and call getEverything() here
      if(this.currentPage < this.totalPages) {
          this.currentPage++; //increment the current page + 1
          this.getHealthNews(); //call this method again here
        }
      }
    }, options);
  }
  
  getHealthNews() {
  //11.in the end, I can install ngx-spinner and inject the spinner Service in the constructor.And then, when the page is load, then show the spinner
    this.spinner.show();
    //3.make this getEverything() method which will subscribe() to fetchEveryThing(currentPage) Observable of the Service, to can get that amount of data.then call this method in ngOnInit()
    this.service.fetchHealthNews(this.currentPage).subscribe(
      data => {
          this.spinner.hide(); //when we get/receive the data,then hide the spinner
      //3'when we have/got the data, then access to 'article' property and store that array in this.article property
        //this.articles = data["articles"];
      //10.here when I get that amount of data, I need to add this new content in the articles array with push() 
        data["articles"].forEach(element => {
          this.articles.push(element);
        })
      //3'when we have/got the data, then access to 'totalResults' property and store it in this.totalPages property (go to template)
        this.totalPages = data.totalResults;
      }
    );
  }

}
