import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailsComponent } from './school/school-details/school-details.component';
import { SchoolResolver } from './school.resolver';
import { SchoolCanActivateGuard } from './school-can-activate.guard';
import { SchoolDeActivateGuard } from './school-de-activate.guard';
import { CanChildrenActivateGuard } from './can-children-activate.guard';


// localhost:4200/home     -- home
// { path:"**" , component:NotfoundComponent } 

//  const appRoutes:Routes =  [
//                  { path:  '' , component:HomeComponent },
//                  { path:'home' , component:HomeComponent  },
//                  { path:'details' , component:DetailsComponent  },
//                  { path:'history' , component: HistoryComponent  },
//                  { path:'not-found' , component: NotfoundComponent  },
//                  { path:"**" , redirectTo:'not-found' } 
//                 ]


//const name:string = "Madan"

localhost:4200

const appRoutes:Routes =  [
    { 
      path:  'school' ,
      component:SchoolComponent  ,
      resolve: [SchoolResolver] ,
      canActivate : [SchoolCanActivateGuard],
      canDeactivate:[SchoolDeActivateGuard],
      canActivateChild:[CanChildrenActivateGuard],
      children:[{
        path : 'schooldetails' , 
        component:SchoolDetailsComponent
      }]
    },
    
   

    // { path : 'schooldetails/:Name' , data:["Hello world"] , component:SchoolDetailsComponent},
    // { path : 'school/schooldetails/:ID' , component:SchoolDetailsComponent}
 
  ]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HistoryComponent,
    NotfoundComponent,
    SchoolComponent,
    SchoolDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
