import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company.component";
import { CompanyListComponent } from "./company-list/company-list.component";
const routes: Routes = [
  {
    path: "",
    component: CompanyComponent,
    children: [{ path: "company-list", component: CompanyListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class CompanyRoutingModule {}
