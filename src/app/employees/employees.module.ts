import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  declarations: [
    TableComponent,
    CreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
