import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SchoolService } from './school.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolResolver implements Resolve<any> {

  constructor(private schoolservice:SchoolService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
      //  console.log(route);
      //  console.log(state);
              const name = "Hello world";
              let output = [];
              output.push(name);
              output.push(this.schoolservice.schoolsList)
       return output;
  }
}
