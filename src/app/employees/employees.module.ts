import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { CreateComponent } from './components/create/create.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    TableComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
