import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: 
    [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      }
    ],
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
