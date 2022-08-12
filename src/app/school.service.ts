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
}
