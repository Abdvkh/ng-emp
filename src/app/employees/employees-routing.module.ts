import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateComponent } from "./components/create/create.component";
import { TableComponent } from "./components/table/table.component";

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
