import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private scoolService: SchoolService
  ) {}

  //http://localhost:4200/schooldetails/EuroKids

  // Q: i want to fetch the routeparms

  // 1. we have to get the activterouter
  // 2. we have to get the params related future
  // 3. subscription  ==> i can get the latest record

  // conslusion : i have to get the subscription of the params
  //     where i can see in the activate route

  // subscripion of your youtube subscribe

  schoolDetails:any = [];


  // schooldetails ----> params queryparamas fragment

  //  prime subscription 

  //  hotstar  

  // i will receive the notification

  // http://localhost:4200/school/schooldetails?SID=School-1
  ngOnInit(): void {
    // this.activateRoute.params.subscribe((param: any) => {
    //   console.log(param);
    //   let output =  this.scoolService.schoolsDetails.filter(
    //     (record) => record.SchoolID === param.ID
    //   );
    //   console.log(output);
    // });

    // this.activateRoute.queryParams.subscribe((param: any) => {
    //   console.log(param);
    //   let output =  this.scoolService.schoolsDetails.filter(
    //     (record) => record.SchoolID === param.SID
    //   );
    //   console.log(output);
    //   this.schoolDetails = output;
    // });

    this.activateRoute.fragment.subscribe((param: any) => {
      console.log(param);
      // schooldetails data
      let output =  this.scoolService.schoolsDetails.filter(
        (record) => record.SchoolID === param
      );
      console.log(output);
      this.schoolDetails = output;
    });




  }
}
