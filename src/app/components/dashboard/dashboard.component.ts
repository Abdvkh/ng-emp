import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  employeesGender = [
    {
      name: 'Male',
      value: 10
    },
    {
      name: 'Female',
      value: 10
    }
  ];
  totalEmployees = [
    {
      name: 'Total',
      value: 10
    },
    {
      name: 'Active',
      value: 20
    }
  ];
}
