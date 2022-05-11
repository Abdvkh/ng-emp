import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { Employee, Gender } from '../../models/employee.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  columnDefs: ColDef[] = [
      { field: 'firstName' },
      { field: 'lastName' },
      { field: 'email'},
      { field: 'mobile'},
      { field: 'birthday'},
      { field: 'gender'},
      { field: 'address1'},
      { field: 'address2'},
      { field: 'city'},
      { field: 'country'},
      { field: 'postal'},
      { field: 'active'},
  ];

  rowData: Employee[] = [
      {
        firstName: 'Abubakr',
        lastName: 'Abduvakhidov',
        email: 'abubakr@vakhid.digital',
        mobile: '+99891234567',
        birthday: '01.01.2000',
        gender: Gender.Male,
        address1: 'Tashkent',
        address2: 'Tashkent',
        city: 'Tashkent',
        postal: 100000,
        active: true,
        country: 'Uzbekistan'
      },
  ];

}
