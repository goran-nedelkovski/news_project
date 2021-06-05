import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
