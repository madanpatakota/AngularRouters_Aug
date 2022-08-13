import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class SchoolService{
    schoolsList = [
        {
          Name: 'Kidzee',
          Location: 'HSR',
          ID: 'School-1',
        },
        {
          Name: 'EuroKids',
          Location: 'SilkBoard',
          ID: 'School-2',
        },
        {
          Name: 'DelhiPublicSchool',
          Location: 'Kormangla',
          ID: 'School-3',
        },
      ];

    schoolsDetails = [ 
        {SchoolID:'School-1', PrinicipleName:"NarayanaMoorthy" , studentsCount : 200 , EstablishDate: 1990} ,
        {SchoolID:'School-2', PrinicipleName:"Ramachandrudu" , studentsCount : 210 , EstablishDate: 2000},
        {SchoolID:'School-3', PrinicipleName:"Prathapudu" , studentsCount : 180 , EstablishDate: 1995}
      ];
}
