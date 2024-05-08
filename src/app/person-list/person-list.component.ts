import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  person: any = {};
  searchText: string = '';
  persons: any[] = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      dob: '1990-01-01',
      avatar: 'https://via.placeholder.com/150',
      country: 'India',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      dob: '1985-05-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'Japan',
    },
    {
      name: 'Michael David',
      email: 'Michael@example.com',
      dob: '1992-11-01',
      avatar: 'https://via.placeholder.com/150',
      country: 'USA',
    },
    {
      name: 'William Joseph',
      email: 'William@example.com',
      dob: '1980-07-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'Malaysia',
    },
    {
      name: 'Richard Thomas',
      email: 'Richard@example.com',
      dob: '1997-12-01',
      avatar: 'https://via.placeholder.com/150',
      country: 'Germany',
    },
    {
      name: 'Charles Smith',
      email: 'Charles@example.com',
      dob: '1995-11-15',
      avatar: 'https://via.placeholder.com/150',
      country: 'Egypt',
    },
    {
      name: 'Harold Joseph',
      email: 'Harold@example.com',
      dob: '1987-05-17',
      avatar: 'https://via.placeholder.com/150',
      country: 'Malaysia',
    },
    {
      name: 'Andrew Paul',
      email: 'Andrew@example.com',
      dob: '1993-08-10',
      avatar: 'https://via.placeholder.com/150',
      country: 'South Africa',
    },
    {
      name: 'Kenneth Brian',
      email: 'Kenneth@example.com',
      dob: '1997-10-18',
      avatar: 'https://via.placeholder.com/150',
      country: 'Poland',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editPerson(person: any): void {
    this.router.navigate(['/update', person.name]);
  }

  onSubmit(): void {
    console.log('Form submitted with data:', this.person);
  }
}
