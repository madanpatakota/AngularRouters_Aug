import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolComponent } from './school/school.component';

@Injectable({
  providedIn: 'root'
})
export class SchoolDeActivateGuard 
implements CanDeactivate<SchoolComponent> {
  canDeactivate(
    component: SchoolComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      let empID = "619409";

      if(empID == "619409"){
        return true;
      }
      else{
        alert("invalid empid . please cross-check again. you do't have the permission to exit the component")
        return false
      }


  }
  
}
