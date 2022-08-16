import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private schoolService:SchoolService,
     private activateroute:ActivatedRoute ,
     private router:Router) { }

  schoolList:any = [];
  ngOnInit(): void {
    this.schoolList = this.schoolService.schoolsList;

    console.log(this);
    console.log(this.activateroute)
    console.log(this.activateroute.data);

    this.activateroute.data.subscribe((data)=>{
      console.log("From the router" ,data);
    })

    //this.activateroute.data

    // this.activateroute.data.subscribe((data)=>{
    //   console.log(data);
    // })


  }


  // in html
  // <td><a  [routerLink]="['/schooldetails',item.Name]">
  // ...More</a></td>

  // /relatepath


  // how to set the relative path in program
  //this.router.navigate(["/schooldetails",ID] , { relativeTo: this.activateroute});


  evtNavigation(ID:string){
    //  in coding part we are doing
    // localhost:4200/schooldetails
     //this.router.navigate(["/schooldetails",ID] , { relativeTo: this.activateroute});
    //  this.router.navigate(["schooldetails"] , 
    //                         {
    //                            queryParams: {SID:ID}, 
    //                            relativeTo: this.activateroute
    //                         });

         this.router.navigate(["schooldetails"] , 
                            {
                               fragment: ID, 
                               relativeTo: this.activateroute
                            });

  
    }

}
