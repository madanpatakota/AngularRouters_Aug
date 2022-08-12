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
  }

  evtNavigation(Name:string){
     this.router.navigate(["schooldetails",Name]);
  }

}
