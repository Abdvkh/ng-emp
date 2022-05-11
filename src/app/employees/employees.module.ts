import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';
import { CreateComponent } from './components/create/create.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { MaterialExampleModule } from '../material.module';

@NgModule({
  declarations: [
    TableComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ]
})
export class EmployeesModule { }
