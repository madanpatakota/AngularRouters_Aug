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
    { path:  'school' , component:SchoolComponent },
    { path : 'schooldetails/:Name' , component:SchoolDetailsComponent},
    { path : 'school/schooldetails' , component:SchoolDetailsComponent}

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
    SchoolDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
