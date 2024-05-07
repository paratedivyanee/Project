import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  person: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Retrieve person details from route parameters
    this.route.params.subscribe((params) => {
      const name = params['name'];
      // Here you would typically fetch person details from a service based on the name
      // For demonstration, I'm just setting some dummy data
      this.person = {
        name: name,
        email: 'example@example.com',
        dob: '1990-01-01',
        avatar: 'https://via.placeholder.com/150',
        country: 'Country',
      };
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
