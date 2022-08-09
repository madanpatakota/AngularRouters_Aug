import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

// localhost:4200/home     -- home
// { path:"**" , component:NotfoundComponent } 

 const appRoutes:Routes =  [
                 { path:  '' , component:HomeComponent },
                 { path:'home' , component:HomeComponent  },
                 { path:'details' , component:DetailsComponent  },
                 { path:'history' , component: HistoryComponent  },
                 { path:'not-found' , component: NotfoundComponent  },
                 { path:"**" , redirectTo:'not-found' } ]


//const name:string = "Madan"
                 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HistoryComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
