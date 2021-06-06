import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { GeneralNewsComponent } from './general-news/general-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all-news',
    pathMatch: 'full'
  },
  {
    path: 'all-news',
    component: AllNewsComponent
  },
  {
    path: 'business-news',
    component: BusinessNewsComponent
  },
  {
    path: 'entertainment-news',
    component: EntertainmentNewsComponent
  },
  {
    path: 'general-news',
    component: GeneralNewsComponent
  },
  {
    path: 'health-news',
    component: HealthNewsComponent
  },
  {
    path: 'science-news',
    component: ScienceNewsComponent
  },
  {
    path: 'sports-news',
    component: SportsNewsComponent
  },
  {
    path: 'technology-news',
    component: TechnologyNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
