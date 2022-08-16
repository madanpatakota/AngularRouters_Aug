import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolCanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let EmpID = "619409";  //  by using the browser storage 
                             // assume that login information we will be store the data in the browsers
                            // and then we will fetch the that data from the brosers.
     // let password = "ang@123";

      if(EmpID == "619410"){
        return true;
      }
      else{
        return false;
      }
    
  }
  
}
