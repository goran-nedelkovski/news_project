import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
//import { Subscription } from 'rxjs';
import { AppService, Article, Source } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastArticle', { read: ElementRef })
  theLastArticle: QueryList<ElementRef> | undefined;
  observer:any;
  //page:number;
  totalPages: number = 0;
  currentPage:number = 1;
  articles: Article[] = [];
  topHeadlines: Article[] = [];
  sources: Source[] = [];
  searchText:string = '';
  //inject App Service here in the constructor()
  constructor(private appService: AppService,
    private spinner: NgxSpinnerService) { }
  ngOnInit() {
    //here in ingOnInit I will subscribe to the Observable from the service to take its value
    this.appService.fetchTopHeadlines().subscribe(
      data => {
        this.topHeadlines = data["articles"];
        console.log(this.topHeadlines);
      }
    );
    this.appService.fetchSources().subscribe(
      data => {
        console.log(this.sources);
        this.sources = data["sources"];
        console.log(this.sources);
      }
    );
    this.getEverything()
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.spinner.show();
    this.theLastArticle?.changes.subscribe(
      (d) => {
          this.spinner.hide();
          console.log(d);
          if(d.last) this.observer.observe(d.last.nativeElement);
      }
    );

  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    this.observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        if(this.currentPage < this.totalPages) {
          this.currentPage++;
          this.getEverything();

        }
      }
    }, options);
  }

  getEverything() {
    this.spinner.show();
    this.appService.fetchEverything(this.currentPage).subscribe(
      data => {
          this.spinner.hide();
        //this.articles = data["articles"];
        data["articles"].forEach(element => {
          this.articles.push(element);
        })
        this.totalPages = data.totalResults;
      }
    );
  }
}

